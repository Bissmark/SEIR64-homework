CREATE TABLE nba (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    team_name TEXT, 
    position INTEGER,
    best_player TEXT
); 

--seed data

INSERT INTO nba (id, team_name, position, best_player) VALUES (1, 'NYK', 5, 'Julius Randle');
INSERT INTO nba (id, team_name, position, best_player) VALUES (2, 'OKC', 8, 'SGA');