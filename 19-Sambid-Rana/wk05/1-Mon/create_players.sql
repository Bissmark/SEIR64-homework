CREATE TABLE players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    nationality TEXT,
    position TEXT,
    goals_scored INTEGER,
    image TEXT
);

-- Seed data
INSERT INTO players (name, age, nationality, position, goals_scored) VALUES ('Lisandro Martinez', 25, 'Argentine','CD', 1);
