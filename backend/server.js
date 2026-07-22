import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const { Pool } = pg;

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({ origin: frontendUrl }));
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl:
    process.env.DB_HOST === "localhost" ? false : { rejectUnauthorized: false },
});

pool
  .connect()
  .then(() => console.log("Database connected"))
  .catch((error) => console.error("Database connection failed", error));

app.get("/", (req, res) => {
  res.send("Impress Studio API is running");
});

app.post("/api/enquiries", async (req, res) => {
  try {
    const { name, businessName, email, phone, services, message } = req.body;

    const result = await pool.query(
      `
                INSERT INTO enquiries
                (
                name, 
                business_name, 
                email,
                phone, 
                service, 
                message
                ) 

                VALUES ($1, $2, $3, $4, $5, $6)

                RETURNING *`,
      [name, businessName, email, phone, services, message],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to save enquiry",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
