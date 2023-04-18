CREATE TABLE players (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT, 
    position TEXT, 
    image TEXT
);

-- seed data

INSERT INTO players (name, position) VALUES ('Giannis Antetokounmpo', 'PF');
INSERT INTO players (name, position) VALUES ('Joel Embiid', 'Center');
INSERT INTO players (name, position) VALUES ('Nikola Jokic', 'Center');