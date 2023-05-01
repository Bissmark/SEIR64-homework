CREATE TABLE sneakers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    colourway TEXT,
    size TEXT,
    ogrelease TEXT,
    release TEXT,
    stylecode TEXT,
    image TEXT --URL for photo link
);

-- sample seed data 
INSERT INTO sneakers (brand, model, colourway, size, ogrelease, release, stylecode, image) 
VALUES ('Nike', 'Air Jordan 3', 'black cement', '8' , '1988', '2011', '136064 010', 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F04%2Fair-jordan-3-black-cement-2018-rumored-launch-1.jpg' );
INSERT INTO sneakers (brand, model, colourway, size, ogrelease, release, stylecode, image) 
VALUES ('Nike', 'Air Max 1', 'white/red', '8.5' , '1986', '2023', 'DQ3989 100', 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/d34ac8bb-11f1-4218-b6de-628d952715ba/air-max-1-86-original-big-bubble-do9844-100-release-date.jpg');