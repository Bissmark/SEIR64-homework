CREATE TABLE brands (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company TEXT,
    category TEXT, 
    image TEXT
);

-- sample seed data
INSERT INTO brands (company, category) VALUES ('Nike', 'Sportswear');
INSERT INTO brands (company, category) VALUES ('Christian Dior', 'Designer');