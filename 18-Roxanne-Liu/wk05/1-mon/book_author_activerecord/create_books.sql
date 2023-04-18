CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author_id INTEGER,
    published_at DATETIME,
    image TEXT -- URL for a book cover
);

--sample seed data
INSERT INTO books (title) VALUES ('The Medium Is the Massage');
INSERT INTO books (title) VALUES ('A Tale of Two Cities');