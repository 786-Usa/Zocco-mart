import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/Database.js";

dotenv.config();

app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});