CREATE TABLE directors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    nationality TEXT,
    image TEXT --- URL 
);

INSERT INTO directors (name, nationality, image) VALUES ("Denis Villeneuve", "Canadian", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Denis_Villeneuve_2017_crop.jpg/440px-Denis_Villeneuve_2017_crop.jpg")