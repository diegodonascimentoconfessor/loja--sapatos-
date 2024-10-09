
import SQLite from 'react-native-sqlite-storage';

const database = SQLite.openDatabase(
  {
    name: 'mydatabase.db',
    location: 'default',
  },
  () => {
    console.log('Database opened successfully');
  },
  error => {
    console.error('Error opening database:', error);
  }
);

export const createTable = () => {
  database.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        idCategory INTEGER NOT NULL,
        image TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        price REAL NOT NULL
      );`,
      [],
      () => {
        console.log('Table created successfully');
      },
      error => {
        console.error('Error creating table:', error);
      }
    );
  });
};

export const insertProduct = (
  idCategory: number,
  image: string,
  title: string,
  description: string,
  price: number
) => {
  database.transaction(tx => {
    tx.executeSql(
      'INSERT INTO products (idCategory, image, title, description, price) VALUES (?, ?, ?, ?, ?)',
      [idCategory, image, title, description, price],
      (_, result) => {
        console.log('Product inserted successfully:', result);
      },
      error => {
        console.error('Error inserting product:', error);
      }
    );
  });
};

export const fetchProducts = (callback: (products: any[]) => void) => {
  database.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM products',
      [],
      (_, result) => {
        const products = [];
        for (let i = 0; i < result.rows.length; i++) {
          products.push(result.rows.item(i));
        }
        callback(products);
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  });
};
