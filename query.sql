-- create a booksDB first and then query this following sql

CREATE TABLE books (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  summary TEXT,
  date_added DATE DEFAULT CURRENT_DATE,
  olid VARCHAR(100)
);

CREATE TABLE books_cover (
	id SERIAL PRIMARY KEY,
	olid VARCHAR(100) UNIQUE,
	book_cover VARCHAR(100)
)


SELECT * FROM books as b JOIN books_cover as bc ON b.olid = bc.olid