DROP TABLE features;

CREATE TABLE features (
  id serial NOT NULL PRIMARY KEY,
  product_id integer NOT NULL,
  feature text,
  value text,
);

DROP TABLE photos;

CREATE TABLE photos (
  id serial NOT NULL,
  styleId INTEGER REFERENCES styles,
  url text,
  thumbnail_url text,
);