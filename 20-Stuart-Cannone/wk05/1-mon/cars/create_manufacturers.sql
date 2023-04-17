CREATE TABLE manufacturers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    country TEXT,
    yearfounded TEXT,
    founder TEXT,
    logo TEXT,
    website TEXT
);

-- sample seed data 
INSERT INTO manufacturers (name, country, yearfounded, founder, logo, website)
VALUES ('Ferrari', 'Italy', '1939', 'Enzo Ferrari', 'https://www.carlogos.org/car-logos/scuderia-ferrari-logo-800x1050.png', 'https://www.ferrari.com'),
       ('Mercedes-Benz', 'Germany', '1926', 'Karl Benz', 'https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png', 'https://www.mercedes-benz.com');
