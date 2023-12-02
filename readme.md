# Book Search and Save Application

This Node.js application enables users to search for books from Open Library and save them to a PostgreSQL database.

## Prerequisites

- Node.js installed on your system
- PostgreSQL database installed and running
- pg Node.js package installed
- Express Node.js package installed
- Axios Node.js package installed

## Features

- Search for books from Open Library
- View search results
- Add searched books to the application
- Save books to the PostgreSQL database

## Development

- Fork this repository to your GitHub account.
- Clone your forked repository to your local machine.
- Make changes to the code as needed.
- Commit your changes and push them to your forked repository.
- Create a pull request to merge your changes into the upstream repository.

## Installation

Install my-project with npm

1. Clone the repository:

```bash
   git clone https://github.com/reyesprince31/Capstone_My_books.git
```

2. Install the required dependencies:

```bash
   npm install
```

3. Create the necessary tables in your PostgreSQL database. You can copy the SQL queries from the `query.sql` file and execute them in your database management tool (e.g., pgAdmin).

4. Configure the database connection settings in the `dbConfig` object in the `index.js` file. Replace the placeholder values with your database credentials.

## Usage

1. Run the application using the following command:

```bash
   node index.js
```

or

```bash
   npm run dev
```

2. The application will start listening on port 3333. You can access the application at

```bash
   http://localhost:3333.
```

## Contributing

Contributions are always welcome!

1. Fork the repository to your GitHub account.

2. Clone your forked repository:

```bash
    git clone https://github.com/reyesprince31/Capstone_My_books.git
    npm install
```

3. Create a new branch for your contribution:

```bash
    git checkout -b feature/your-feature-name
```

4. Make your changes, commit them, and push to your forked repository:

```bash
    git commit -m "Add feature"
    git push origin feature/your-feature-name

```

5. Create a pull request (PR) to the main repository. Provide a descriptive title and details about your changes.

6. Your PR will be reviewed, and once approved, it will be merged into the main project.

Thank you for contributing!
