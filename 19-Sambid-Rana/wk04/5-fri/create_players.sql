CREATE TABLE football_players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    goals_scored INTEGER,
    image TEXT --url of the player
);

--seed data
INSERT INTO football_players (first_name, last_name, goals_scored) VALUES ("Lisandro", "Martinez", 1);
INSERT INTO football_players (first_name, last_name, goals_scored) VALUES ("Marcus", "Rashford", 15);

