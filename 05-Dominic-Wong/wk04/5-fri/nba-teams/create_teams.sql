CREATE TABLE nba_teams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    city TEXT,
    image TEXT
);

-- sample data
INSERT INTO nba_teams (name, city) VALUES ("Indiana Pacers", "Indianapolis");
INSERT INTO nba_teams (name, city) VALUES ("Golden State Warriors", "San Francisco");