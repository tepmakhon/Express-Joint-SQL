import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "testing",
  password: "Hon979471197",
  port: 5432,
});