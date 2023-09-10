BEGIN TRANSACTION;

CREATE TABLE product_category (
    id SERIAL PRIMARY KEY,
    name text
);

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    description text,
    image text,
    name text,
    price money,
    category_id integer REFERENCES product_category(id)
);

COMMIT;