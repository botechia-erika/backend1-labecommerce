-- Active: 1685192188115@@127.0.0.1@3306

CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        role TEXT NOT NULL,
        password TEXT NOT NULL,
        created_at TEXT DEFAULT (DATETIME('now')) NOT NULL
    );

DROP TABLE users;

INSERT INTO
    users (
        id,
        name,
        username,
        email,
        role,
        password
    )
VALUES (
        "u001",
        "Letícia Souza",
        "leticia-souza",
        "leticinhatop@gmail.com",
        "STUDENT",
        "Reng3shi"
    ), (
        "u002",
        "Veronica Lira Melo",
        "veronica-melo",
        "vevezinhalm97@gmail.com",
        "STUDENT",
        "DisneyAll97"
    ), (
        "u003",
        "Vitor Araujo Ribeiro",
        "vih-ribeiro",
        "vitao94@gmail.com",
        "STUDENT",
        "vithXL94"
    );

SELECT * FROM users;

CREATE TABLE
    products(
        id TEXT PRIMARY KEY NOT NULL UNIQUE,
        name TEXT NOT NULL,
        img_url TEXT NOT NULL,
        price INTEGER NOT NULL,
        category TEXT NOT NULL,
        stock INTEGER NOT NULL
    );

DROP TABLE products ;

INSERT INTO
    products(
        id,
        name,
        img_url,
        price,
        category,
        stock
    )
VALUES (
        "P001",
        "TECLADO LOGITECH G915TKL GAMER",
        "https://i.ibb.co/y5jvCMM/P01-img01.png",
        1200,
        "INFORMATICA",
        4
    ), (
        "P002",
        "FONE BLUETOOTH BLUE IT",
        "https://i.ibb.co/T2YJKzs/P00-img01.png",
        95,
        "AUDIO",
        15
    ), (
        "P003",
        "Mouse Gamer Corsair Scimitar Elite",
        "https://i.ibb.co/qRtJKhj/P02-img01.png",
        300,
        "INFORMATICA",
        8
    );

price real [not null] description text [not null] image_url text [not null]};

Table purchases{id text [pk, unique, not null] buyer text [not null, ref: > users.id] total_price real [not null] created_at text [not null, default: "DATETIME()"] paid integer [not null, default: 0]}Table purchases_products{purchase_id text [not null, ref: <> purchases.id] product_id text [not null, ref: <> products.id] quantity integer [not null, default: 1]}