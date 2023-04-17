CREATE TABLE playlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist TEXT,
    title TEXT,
    image TEXT
);

-- sample seed data
INSERT INTO playlist (artist, title) VALUES ('The Gist', 'Love at first sight');
INSERT INTO playlist (artist, title) VALUES ('The Go-Betweens', 'Karen');
