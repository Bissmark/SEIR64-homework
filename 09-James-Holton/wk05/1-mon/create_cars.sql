CREATE TABLE cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    make TEXT,
    model TEXT,
    body TEXT,
    color TEXT,
    year INTEGER,
    kilometres INTEGER,
    transmission TEXT,
    engine INTEGER,
    image TEXT
);

INSERT INTO cars (make, model, body, color, year, kilometres, transmission, engine) VALUES ('Volkswagen', 'Passat', 'Sedan', 'Pearl White', 2016, 90000, 'Automatic', 1.8);

INSERT INTO cars (make, model, body, color, year, kilometres, transmission, engine) VALUES ('Toyota', 'Camry', 'Sedan', 'Green', 2005, 103000, 'Automatic', 2.4);