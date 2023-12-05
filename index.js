import dotenv from "dotenv";
dotenv.config();

import express from "express";
import pg from "pg";
import axios from "axios";

const app = express();
const PORT = 3333;
const searchURL = "http://openlibrary.org/search.json?title=";

const dbConfig = {
  user: process.env.PG_USERNAME,
  host: process.env.PG_HOSTNAME,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: 5432,
  ssl: true,
};

const db = new pg.Client(dbConfig);

db.connect().then(console.log("Successfully connected to PostgreSQL database"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//storage for temp searched title
let searchedBooks = [];

app.get("/", async (req, res) => {
  const data = await db.query(
    "SELECT * FROM books as b JOIN books_cover as bc ON b.olid = bc.olid"
  );
  const books = data.rows;

  res.render("index.ejs", { books, bookResult: searchedBooks });
});

app.get("/add", (req, res) => {
  res.render("addBook.ejs");
});

app.get("/add/works/:id", (req, res) => {
  const id = req.params.id;

  //clicking the chosen book and then checked for unique key and will the required data for addBook.ejs
  const foundBook = searchedBooks.find((book) => book.key === "/works/" + id);

  //this one is for book_cover that compares with id params
  const foundBookCover = foundBook.cover_edition_key
    ? `https://covers.openlibrary.org/b/olid/${foundBook.cover_edition_key}-M.jpg`
    : "";

  const addSearchedBook = {
    olid: id,
    book_cover: foundBookCover,
    title: foundBook.title,
    author: foundBook.author_name,
  };

  res.render("addBook.ejs", { addSearchedBook });
});

app.post("/search", async (req, res) => {
  //searching for title and result will be store in searchedBooks empty array
  const response = await axios.get(searchURL + req.body.title);
  const bookResult = await response.data.docs;

  searchedBooks = bookResult;

  res.redirect("/");
});

app.post("/save", async (req, res) => {
  const { olid, book_cover, title, author, summary } = req.body;
  // when everything is in place then  it will save simultaneously on books table and books_cover table
  try {
    const savedBook = await db.query(
      "INSERT INTO books (title, author, summary, olid) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, author, summary, olid]
    );

    const saveBook_Cover = await db.query(
      "INSERT INTO books_cover (olid, book_cover) VALUES ($1, $2) RETURNING *",
      [olid, book_cover]
    );

    //empty the searchedBooks  array and then redirect
    searchedBooks = [];
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Successfully connected to http://localhost:${PORT}`);
});
