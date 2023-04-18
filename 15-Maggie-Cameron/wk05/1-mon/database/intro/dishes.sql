CREATE TABLE dishes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    origin_country TEXT, 
    image TEXT
    );

INSERT INTO dishes (name, origin_country) VALUES ('Coq au Vin', 'France');
INSERT INTO dishes (name, origin_country) VALUES ('Tom Yum', 'Thailand');