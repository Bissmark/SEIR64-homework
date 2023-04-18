CREATE TABLE cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    year TEXT,
    layout TEXT,
    engine TEXT,
    power TEXT,
    weight TEXT,
    image TEXT 
);

INSERT INTO cars (name, year, layout, engine, power, weight, image) VALUES ('F8', '2019', 'RR', 'V8 3.6L twin-turbo', '530 kW', '1435 kg', 'https://assets.whichcar.com.au/image/upload/s--Z59qWZVT--/ar_2.304921968787515,c_fill,f_auto,q_auto:good/c_scale,w_1350/v1/archive/whichcar/2020/02/27/96335/Ferrari-F8-Tributo-review.jpg');;
INSERT INTO cars (name, year, layout, engine, power, weight, image) VALUES ('AMG GT Black Edition', '2022', 'MR', 'V8 4.0L twin-turbo', '537 kW', '1615 kg', 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2021-Mercedes-AMG-GT-Black-Series-coupe-silver-1001x565-1.jpg');