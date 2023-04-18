CREATE TABLE directors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age TEXT,
    image TEXT -- (URL)
);

-------------------------- Seed Values --------------------------
INSERT INTO directors (name, age, image) VALUES ('Michael Bay', '58', 'https://en.wikipedia.org/wiki/File:Michael.bay.png');
INSERT INTO directors (name, age, image) VALUES ('Orson Wells', '70(D)', 'https://en.wikipedia.org/wiki/File:Orson_Welles_1937_cr3-4.jpg');