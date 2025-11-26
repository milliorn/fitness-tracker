import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

// Create or open sqlite.db at project root
const db = new Database("./sqlite.db");

// Better concurrency + performance
db.pragma("journal_mode = WAL");

export const auth = betterAuth({
  database: db,
});
