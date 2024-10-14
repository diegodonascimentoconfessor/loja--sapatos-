import { SQLiteDatabase } from "expo-sqlite";

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;

  try {
    const result = await db.getFirstAsync<{ user_version: number }>(
      'PRAGMA user_version'
    );

    const currentDbVersion = result ? result.user_version : 0;

  
    if (currentDbVersion >= DATABASE_VERSION) {
      return;
    }

    // Iniciar a migração se a versão atual for 0
    if (currentDbVersion === 0) {
      await db.execAsync(`
        PRAGMA journal_mode = 'wal';

        CREATE TABLE IF NOT EXISTS users (
          username TEXT NOT NULL UNIQUE,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY NOT NULL,
          idCategory TEXT NOT NULL,
          image TEXT NOT NULL,
          title TEXT NOT NULL,
          description TEXT,
          price TEXT NOT NULL
        );
      `);
      // Atualizar a versão do banco de dados
      await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
    }
  } catch (error) {
    console.error('Erro ao migrar o banco de dados:', error);
    throw error; // Lançar o erro para que possa ser tratado onde a função é chamada
  }
}
