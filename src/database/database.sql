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

SELECT * FROM products;

create TABLE
    purchases(
        id TEXT PRIMARY KEY NOT NULL UNIQUE,
        product_id TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        total_price REAL NOT NULL,
        buyer_id TEXT NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (buyer_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

DROP TABLE purchases;

INSERT INTO
    purchases(
        id,
        product_id,
        quantity,
        total_price,
        buyer_id
    )
VALUES ("PG001", "P001", 1, 1200, "u001"), ("PG002", "P002", 1, 95, "u002"), ("PG003", "P003", 1, 300, "u003");

SELECT * FROM purchases;

CREATE TABLE
    sale(
        purchase_id TEXT NOT NULL,
        product_id TEXT NOT NULL,
        FOREIGN KEY (purchase_id) REFERENCES purchases(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

DROP TABLE sale;

INSERT INTO
    sale(purchase_id, product_id)
VALUES ("PG001", "P001"), ("PG002", "P002"), ("PG003", "P003");

SELECT * FROM sale;

SELECT *
FROM products
    LEFT JOIN sale ON sale.purchase_id = product_id;

SELECT
    products.name,
    products.price,
    purchases.quantity,
    purchases.total_price,
    purchases.buyer_id
FROM purchases
    INNER JOIN sale ON purchases.id = sale.purchase_id
    INNER JOIN products ON sale.product_id = products.id