CREATE TABLE footyteams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    nationality TEXT,
    image TEXT -- URL for a footyteam photo
);

-- sample seed data
INSERT INTO footyteams (name, nationality) VALUES ('Arsenal', 'English');
INSERT INTO footyteams (name, nationality) VALUES ('Chelsea', 'English');