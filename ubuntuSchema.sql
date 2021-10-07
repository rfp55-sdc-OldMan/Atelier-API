DROP DATABASE productsdb;
CREATE DATABASE productsdb;

-- connect to database
\c productsdb;

DROP ROLE api;
CREATE ROLE api LOGIN PASSWORD 'apiuser';

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  slogan varchar,
  description varchar,
  category varchar,
  default_price TEXT
);

COPY products FROM '/home/ubuntu/products/product.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX idx_t_product_id ON products USING hash (id);

CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  product_id integer REFERENCES products,
  feature varchar,
  value varchar
);

COPY features FROM '/home/ubuntu/products/features.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX idx_t_features_product_id ON features USING hash (product_id);

CREATE TABLE styles (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products,
  name TEXT NOT NULL,
  sale_price varchar DEFAULT NULL,
  original_price varchar NOT NULL,
  default_style boolean
);

COPY styles FROM '/home/ubuntu/products/styles.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX idx_t_styles_id ON styles USING hash (id);
CREATE INDEX idx_t_styles_product_id ON styles USING hash (product_id);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  style_id INTEGER REFERENCES styles,
  url varchar,
  thumbnail_url varchar
);

COPY photos FROM '/home/ubuntu/products/photos.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX idx_t_photos_style_id ON photos USING hash (style_id);

CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  style_id INTEGER REFERENCES styles,
  size varchar,
  quantity integer
);

COPY skus FROM '/home/ubuntu/products/skus.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX idx_t_skus_style_id ON skus USING hash (style_id);

CREATE TABLE related (
  id SERIAL PRIMARY KEY,
  current_product_id INTEGER REFERENCES products(id),
  related_product_id INTEGER
);

COPY related FROM '/home/ubuntu/products/related.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX idx_t_current_product_id ON related USING hash (current_product_id);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO api;
