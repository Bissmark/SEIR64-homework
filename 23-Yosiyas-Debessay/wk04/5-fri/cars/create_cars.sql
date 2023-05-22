CREATE TABLE cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    make TEXT,
    model TEXT,
    series TEXT,
    year INTEGER,
    image TEXT --URL for a car photo
)

-- sample seed data
INSERT INTO cars (make, model, year) VALUES ('Nissan', 'Silvia', 'S15', '1999')
INSERT INTO cars (make, model, year) VALUES ('Mazda', 'RX-7', 'FD', '1999')