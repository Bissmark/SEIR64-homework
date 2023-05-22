CREATE TABLE animals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    family TEXT,
    image TEXT -- URL for a butterfly photo
);

-- sample seed data
INSERT INTO animals (name, family) VALUES ('Monarch', 'Nymphalidae');
INSERT INTO animals (name, family) VALUES ('Ulysses', 'Blue');