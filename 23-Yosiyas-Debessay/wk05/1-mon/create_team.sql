CREATE TABLE teams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    country TEXT,
    image TEXT
);

INSERT INTO teams (name, country) VALUES ('Manchester-United', 'England');
INSERT INTO teams (name, country) VALUES ('Liverpool', 'England');
