CREATE TABLE companies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    -- family TEXT,
    image TEXT -- URL for a company photo
);

-- sample seed data
INSERT INTO companies (name) VALUES ('Toyota');
INSERT INTO companies (name) VALUES ('Honda');