CREATE TABLE nba_players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nba_teams_id INTEGER,
    name TEXT,
    position TEXT,
    image TEXT
);

-- seed data

INSERT INTO nba_players (name) VALUES ('Tyrese Haliburton');
INSERT INTO nba_players (name) VALUES ('Stephen Curry');