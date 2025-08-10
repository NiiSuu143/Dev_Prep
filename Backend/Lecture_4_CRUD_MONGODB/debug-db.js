const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Log loaded env vars (mask password)
console.log("DB_USERNAME:", process.env.DB_USERNAME);
console.log("DB_PASSWORD length:", process.env.DB_PASSWORD ? process.env.DB_PASSWORD.length : "MISSING");

// Build connection string safely
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}:${encodeURIComponent(process.env.DB_PASSWORD)}@cluster0.m8fg9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log("DB Link (masked):", dbLink.replace(process.env.DB_PASSWORD, "******"));

// Try connection
mongoose.connect(dbLink)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas successfully");
    process.exit(0);
  })
  .catch(err => {
    console.error("❌ Connection failed");
    console.error("Error message:", err.message);
    console.error("Full error:", err);
    process.exit(1);
  });
