CREATE TABLE teams (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT, 
    mvp TEXT,
    image TEXT
); 

--seed data

INSERT INTO teams (id, name, mvp) VALUES (1, 'NYK', 'Julius Randle');
INSERT INTO teams (id, name, mvp) VALUES (2, 'OKC', 'SGA');