CREATE TABLE films (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    releaseyr TEXT,
    image TEXT -- (URL)
);

-------------------------- Seed Values --------------------------
INSERT INTO films (title, releaseyr, image) VALUES ('Transformers', '2007', 'https://en.wikipedia.org/wiki/Transformers_(film)');
INSERT INTO films (title, releaseyr, image) VALUES ('Citizen Kane', '1941', 'https://en.wikipedia.org/wiki/File:Citizen_Kane_poster,_1941_(Style_B,_unrestored).jpg');