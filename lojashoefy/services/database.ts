

import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    { name: 'products.db', location: 'default' },
    () => {},
    error => {
        console.error('Error opening database:', error);
    }
);

export const initDatabase = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT,
                price REAL,
                image TEXT
            );`,
            [],
            () => { console.log('Table created successfully'); },
            error => { console.error('Error creating table:', error); }
        );
    });
};

export const addProduct = (product: { title: string; description: string; price: number; image: string }) => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO products (title, description, price, image) VALUES (?, ?, ?, ?)',
            [product.title, product.description, product.price, product.image],
            () => { console.log('Product added successfully'); },
            error => { console.error('Error adding product:', error); }
        );
    });
};

export const getProductById = (id: number) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM products WHERE id = ?',
                [id],
                (tx, results) => {
                    if (results.rows.length > 0) {
                        resolve(results.rows.item(0));
                    } else {
                        resolve(null);
                    }
                },
                error => {
                    reject(error);
                }
            );
        });
    });
};

export const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM products',
                [],
                (tx, results) => {
                    const products = [];
                    for (let i = 0; i < results.rows.length; i++) {
                        products.push(results.rows.item(i));
                    }
                    resolve(products);
                },
                error => {
                    reject(error);
                }
            );
        });
    });
};
