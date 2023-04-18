CREATE TABLE countries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    continent TEXT, 
    image TEXT
    );

INSERT INTO countries (name, continent) VALUES ('France', 'Europe');
INSERT INTO countries (name, continent) VALUES ('Thailand', 'Asia');