CREATE TABLE items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    genre TEXT,
    played TEXT,
    image TEXT -- text because url
);

INSERT INTO items (name, genre, played, image) VALUES ('Ninja Gaiden', 'Action', 'true', 'https://assets-prd.ignimgs.com/2022/01/19/ninja-gaiden-sigma-1-button-1642583495805.jpg');
INSERT INTO items (name, genre, played, image) VALUES ('Forza 5', 'Racing', 'false', 'https://store-images.s-microsoft.com/image/apps.49800.13718773309227929.bebdcc0e-1ed5-4778-8732-f4ef65a2f445.9ac09d39-064d-466c-81ca-2f1b6f0b95c5');
