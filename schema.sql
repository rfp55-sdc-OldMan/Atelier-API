DROP TABLE products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  slogan varchar,
  description varchar,
  category varchar,
  default_price integer
);

DROP TABLE styles;

CREATE TABLE styles (
  id SERIAL PRIMARY KEY,
  productId INTEGER REFERENCES products,
  name varchar,
  sale_price varchar DEFAULT NULL,
  original_price varchar NOT NULL,
  default_style boolean
);

DROP TABLE features;

CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  product_id integer REFERENCES products,
  feature varchar,
  value varchar
);

DROP TABLE photos;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  styleId INTEGER REFERENCES styles,
  url varchar,
  thumbnail_url varchar
);

DROP TABLE skus;

CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  styleId INTEGER REFERENCES styles,
  size varchar,
  quantity integer
);

DROP TABLE related;

CREATE TABLE related (
  id SERIAL PRIMARY KEY,
  current_product_id INTEGER REFERENCES products,
  related_product_id INTEGER REFERENCES products
);

-- ALTER TABLE features ADD CONSTRAINT features_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id);

copy products from '/Users/Simbelmyne/Online_Learning/Hack_Reactor/SDC/Products-API/assets/product.csv' WITH (FORMAT csv, header);

copy styles from '/Users/Simbelmyne/Online_Learning/Hack_Reactor/SDC/Products-API/assets/styles.csv' WITH (FORMAT csv, header);

copy features from '/Users/Simbelmyne/Online_Learning/Hack_Reactor/SDC/Products-API/assets/features.csv' WITH (FORMAT csv, header);

copy photos from '/Users/Simbelmyne/Online_Learning/Hack_Reactor/SDC/Products-API/assets/photos.csv' WITH (FORMAT csv, header);

copy skus from '/Users/Simbelmyne/Online_Learning/Hack_Reactor/SDC/Products-API/assets/skus.csv' WITH (FORMAT csv, header);

copy related from '/Users/Simbelmyne/Online_Learning/Hack_Reactor/SDC/Products-API/assets/related.csv' WITH (FORMAT csv, header);