CREATE TABLE cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    image URL
);


-- Sample seed data
INSERT INTO cars ( brand, model, image ) VALUES ( 'Toyota', 'RAV4', 'https://images.prismic.io/carwow/4cccbdb5-aef5-4a15-9ad3-4fdc1c342e31_rav4-1milon.jpg?fit=clip&q=60&w=750&cs=tinysrgb&auto=format' );
INSERT INTO cars ( brand, model, image ) VALUES ( 'Tesla', 'Model 3', 'https://tesla-cdn.thron.com/delivery/public/image/tesla/197be9d8-7cf6-49b8-a711-e56237fa874a/bvlatuR/std/1200x628/rhd-model-3-social' );
INSERT INTO cars ( brand, model, image ) VALUES ( 'Volkswagen', 'Goft GTI', 'https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2021/05/2022_Volkswagen_GTI_6.jpg' );
INSERT INTO cars ( brand, model, image ) VALUES ( 'Toyota', 'GR Supra', 'https://www.telegraph.co.uk/content/dam/cars/2022/06/27/TELEMMGLPICT000301028429_trans_NvBQzQNjv4Bq4wC_TC1gtw3BUO4wxu2AJJPLJ9_8hgDlHRneDdJt4EY.jpeg' );