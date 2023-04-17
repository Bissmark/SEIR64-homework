CREATE TABLE astronomy (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    type TEXT,
    summary TEXT,
    image TEXT --- URL
);

INSERT INTO astronomy (name, type, summary, image) VALUES ("Jupiter", "Gas Giant", "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun.", "https://s.hdnux.com/photos/01/31/33/56/23444366/3/2400x0.jpg");
INSERT INTO astronomy (name, type, summary, image) VALUES ("Saturn", "Gas Giant", "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth, but is over 95 times more massive.", "https://space-facts.com/wp-content/uploads/saturn-v2.jpg");