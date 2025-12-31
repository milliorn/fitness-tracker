import Database from "better-sqlite3";

export const db = new Database(process.env.SQLITE_DB_PATH!);

// performance / concurrency tweak
// REQUIRED pragmas
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");
