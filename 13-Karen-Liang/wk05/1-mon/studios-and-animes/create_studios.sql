CREATE TABLE studios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- do not need to include in sample as it is generated automatically
    name TEXT,
    founders TEXT,
    image TEXT -- URL
);

-- sample seed data for testing
INSERT INTO studios (name, founders) VALUES ('Madhouse', 'Masao Maruyama, Yoshiaki Kawajiri, Osamu Dezaki');