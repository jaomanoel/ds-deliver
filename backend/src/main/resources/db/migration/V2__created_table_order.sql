CREATE TABLE tb_order (
    id SERIAL PRIMARY KEY,
    address varchar(255),
    latitude DOUBLE,
    longitude DOUBLE,
    moment TIMESTAMP,
    status SMALLINT
);
