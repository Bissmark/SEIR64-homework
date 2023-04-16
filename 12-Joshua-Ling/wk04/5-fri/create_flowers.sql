CREATE TABLE flowers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    season TEXT,
    lifespan FLOAT,
    image TEXT
);

INSERT INTO flowers (name, season, lifespan) VALUES ("Bob","Winter",80.4);