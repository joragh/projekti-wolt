import mysql from 'mysql2/promise';
let pool;
export function db(){if(!pool){pool=mysql.createPool(process.env.DATABASE_URL||'mysql://root:password@localhost:3306/wolt_project')}return pool}
