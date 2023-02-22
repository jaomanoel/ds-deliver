CREATE TABLE tb_order (
    id SERIAL PRIMARY KEY,
    address varchar(255),
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    moment TIMESTAMP,
    status SMALLINT,
    total_price DOUBLE PRECISION
);
