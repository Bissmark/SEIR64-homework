CREATE TABLE clubs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    club_name TEXT, --club name
    player TEXT,
    image_logo TEXT --club logo
);

-- seed data
INSERT INTO clubs (club_name, player) VALUES ("Manchester United", "Lisandro Martinez");
INSERT INTO clubs (club_name, player) VALUES ("Manchester City", "Earling Haaland");