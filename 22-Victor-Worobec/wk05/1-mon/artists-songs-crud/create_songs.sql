CREATE TABLE songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    artist_id INTEGER, -- trying to get association working
    genre TEXT,
    duration TEXT, -- durations from youtube video
    youtube TEXT -- youtube video code
);

INSERT INTO songs (name, artist_id, genre, duration, youtube) VALUES ('Go Crazy', 1, 'RnB', '3:30', 'dPhwbZBvW2o');
INSERT INTO songs (name, artist_id, genre, duration, youtube) VALUES ('Prayer In C (Robin Schulz Remix)', 2, 'Electronic', '3:13', 'fiore9Z5iUg');
INSERT INTO songs (name, artist_id, genre, duration, youtube) VALUES ('Be Right There', 3, 'Electronic', '3:57', 'HIJ5XvZeb-k');