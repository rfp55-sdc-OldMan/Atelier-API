DROP TABLE product;

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name text NOT NULL,
  slogan text,
  description text,
  category text,
  default_price integer
);

DROP TABLE styles;

CREATE TABLE styles (
  id SERIAL PRIMARY KEY,
  productId INTEGER REFERENCES product,
  name text,
  sale_price INTEGER DEFAULT NULL,
  original_price INTEGER NOT NULL,
  default_style boolean
);

DROP TABLE features;

CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  product_id integer NOT NULL REFERENCES product,
  feature text,
  value text
);

DROP TABLE photos;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  styleId INTEGER REFERENCES styles,
  url text,
  thumbnail_url text
);

DROP TABLE skus;

CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  styleId INTEGER REFERENCES styles,
  size text,
  quantity integer
);

DROP TABLE related;

CREATE TABLE related (
  id SERIAL PRIMARY KEY,
  current_product_id INTEGER REFERENCES product,
  related_product_id INTEGER REFERENCES product
)