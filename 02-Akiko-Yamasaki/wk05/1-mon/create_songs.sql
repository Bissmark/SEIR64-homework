CREATE TABLE songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    image TEXT
);

--sample seed data
INSERT INTO songs (title) VALUES ('Love at first sight');
INSERT INTO songs (title) VALUES ('Lee Remick');
INSERT INTO songs (title) VALUES ('Completely and Utterly');
