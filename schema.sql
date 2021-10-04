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
  current_product_id INTEGER REFERENCES products(id),
  related_product_id INTEGER
);

-- ALTER TABLE features ADD CONSTRAINT features_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id);

COPY products FROM '/Users/Simbelmyne/Online_Learning/Hack_Reactor/SDC/Products-API/assets/product.csv' WITH (FORMAT csv, header);
COPY styles FROM '/Users/Simbelmyne/Online_Learning/Hack_Reactor/SDC/Products-API/assets/styles.csv' WITH (FORMAT csv, header);
COPY features FROM '/Users/Simbelmyne/Online_Learning/Hack_Reactor/SDC/Products-API/assets/features.csv' WITH (FORMAT csv, header);
COPY photos FROM '/Users/Simbelmyne/Online_Learning/Hack_Reactor/SDC/Products-API/assets/photos.csv' WITH (FORMAT csv, header);
COPY skus FROM '/Users/Simbelmyne/Online_Learning/Hack_Reactor/SDC/Products-API/assets/skus.csv' WITH (FORMAT csv, header);
COPY related FROM '/Users/Simbelmyne/Online_Learning/Hack_Reactor/SDC/Products-API/assets/related.csv' WITH (FORMAT csv, header);

CREATE INDEX idx_t_product_id ON products USING hash (id);
CREATE INDEX idx_t_styles_id ON styles USING hash (style_id);
CREATE INDEX idx_t_current_product_id ON related USING hash (current_product_id);
CREATE INDEX idx_t_features_product_id ON features USING hash (product_id);
CREATE INDEX idx_t_photos_style_id ON photos USING hash (style_id);
CREATE INDEX idx_t_skus_style_id ON skus USING hash (style_id);
