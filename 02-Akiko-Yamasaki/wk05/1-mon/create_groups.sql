CREATE TABLE groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT
);


--seed data
INSERT INTO groups (name) VALUES ('The Gist');
INSERT INTO groups (name) VALUES ('The Go-Betweens');