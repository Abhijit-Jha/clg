import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD | "mysecretpassword",
    database: process.env.DB_NAME | "testdb",
    // port : 3300
})
export default db;
