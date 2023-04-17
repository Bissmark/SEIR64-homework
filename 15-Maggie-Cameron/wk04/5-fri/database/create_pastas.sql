CREATE TABLE pastas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    region TEXT,
    image TEXT
);

INSERT INTO pastas (name, region) VALUES ('Bolognese', 'Bologna');
INSERT INTO pastas (name, region) VALUES ('Carbonara', 'Rome');