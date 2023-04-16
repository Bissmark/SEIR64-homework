CREATE TABLE dishes (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- do not need to include in sample as it is generated automatically
    name TEXT,
    category TEXT,
    description TEXT,
    image TEXT -- URL
);

-- sample seed data for testing
INSERT INTO dishes (name, category, description) VALUES ('Har Gow (Shrimp Dumpling)', 'Dumpling', 'Har Gow is a traditional Cantonese dim sum dish that consists of translucent, pleated dumplings filled with succulent shrimp. These delicate, steamed dumplings are known for their thin, chewy wrappers and juicy, flavorful shrimp filling.');