CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    plot TEXT,
    year INTEGER,
    poster TEXT --- URL 
);

INSERT INTO movies (name, plot, year, poster) VALUES ("Dune", "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.", 2021, "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/11/17141234/1.-Rory_Kurtz_Dune_REG.jpg")