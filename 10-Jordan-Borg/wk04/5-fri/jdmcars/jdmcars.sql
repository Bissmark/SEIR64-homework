CREATE TABLE jdmcars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    family TEXT,
    image TEXT -- URL for a butterfly photo
);

-- sample seed data
INSERT INTO jdmcars (name, family) VALUES ('Honda', 'Civic');
INSERT INTO jdmcars (name, family) VALUES ('Toyota', 'Supra');