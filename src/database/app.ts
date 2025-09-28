require("dotenv").config();

const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

export const requestHandler = async (req:any|void, res:any|void) => {
  const result = await sql`SELECT * from people`;
  return result
};