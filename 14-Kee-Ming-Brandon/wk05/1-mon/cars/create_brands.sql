CREATE TABLE brands (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    origin TEXT,
    logo URL
);


-- Sample seed data
INSERT INTO brands (name, origin, logo) VALUES ( 'Toyota', 'Japan', 'https://www.carlogos.org/car-logos/toyota-logo-1989-1400x1200.png' );
INSERT INTO brands (name, origin, logo) VALUES ( 'Tesla', 'United State', 'https://www.carlogos.org/car-logos/tesla-logo-2200x2800.png' );
INSERT INTO brands (name, origin, logo) VALUES ( 'Volkswagen', 'Germany', 'https://www.carlogos.org/logo/Volkswagen-logo-2019-1500x1500.png' );