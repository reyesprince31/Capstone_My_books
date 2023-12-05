import dotenv from "dotenv";
dotenv.config();

import { Pool } from "pg";

const poolConfig = {
  max: 5,
  min: 2,
  idleTimeoutMillis: 600000,
};

const Host = process.env.PG_HOSTNAME;
const Database = process.env.PG_DATABASE;
const UserName = process.env.PG_USERNAME;
const Password = process.env.PG_PASSWORD;
const Port = proces.env.PG_PORT;

poolConfig.connectionString = `postgres://${UserName}:${Password}@dpg-cllho27q7omc73cm890g-a.oregon-postgres.render.com/books_postgres`;
