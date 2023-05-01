CREATE TABLE artists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    alive TEXT, -- BOOL/BOOLEAN
    image TEXT
);

INSERT INTO artists (name, alive, image) VALUES ('Chris Brown','Yes', 'https://staticg.sportskeeda.com/editor/2023/02/26ab4-16767142877863-1920.jpg');
INSERT INTO artists (name, alive, image) VALUES ('Robin Schulz', 'Yes', 'https://thumbnailer.mixcloud.com/unsafe/1200x628/profile/a/3/2/e/c3ed-9b23-49c4-80ff-e07d107af5ed');
INSERT INTO artists (name, alive, image) VALUES ('Diplo', 'Yes', 'https://media.npr.org/assets/img/2017/11/20/diplo-2016-alexei-hay-2_wide-43e8194133f367cedf750e8114e119c8ce982473.jpg');