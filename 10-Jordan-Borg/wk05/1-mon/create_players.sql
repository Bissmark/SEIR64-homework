CREATE TABLE players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    nationality TEXT,
    image TEXT -- URL for a footyteam photo
);

-- sample seed data
INSERT INTO players (name, nationality) VALUES ('Ronaldo', 'Brazil');
INSERT INTO players (name, nationality) VALUES ('Nedved', 'Czech');