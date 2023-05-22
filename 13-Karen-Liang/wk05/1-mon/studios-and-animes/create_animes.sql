CREATE TABLE animes (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- do not need to include in sample as it is generated automatically
    name TEXT,
    description TEXT,
    image TEXT -- URL
);

-- sample seed data for testing
INSERT INTO animes (name, description) VALUES ('Jujutsu Kaisen ', 'Jujutsu Kaisen" is a dark fantasy action anime based on the manga series by Gege Akutami. It follows Yuji Itadori, a high school student who becomes a jujutsu sorcerer and battles cursed spirits threatening humanity. Known for its intense action, unique characters, and intricate world-building, "Jujutsu Kaisen" has gained widespread acclaim among anime fans worldwide');