CREATE TABLE butterflies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  image TEXT -- url for a butterfly photo
);

-- seed
INSERT INTO butterflies (name, family) VALUES ('Monarch', 'Nymphalidae');