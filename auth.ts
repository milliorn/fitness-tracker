import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

// Create or open sqlite.db at project root
const db = new Database("./sqlite.db");

export const auth = betterAuth({
  database: db,
});
