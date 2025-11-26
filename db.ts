// db.ts
import Database from "better-sqlite3";

export const db = new Database("./sqlite.db");

// performance / concurrency tweak
db.pragma("journal_mode = WAL");
