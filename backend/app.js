import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from "path";
import userRouter from "./routes/userRouter.js";
import cors from 'cors';
import errorMiddleware from './middleware/error.js';

const app = express();

app.use(cors(
  {
    origin: "http://localhost:5173", // Allow requests from the frontend URL
    credentials: true, // Allow cookies to be sent with requests
  }
)); // Allow requests from the frontend URL

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//routes
app.use("/api/v1", userRouter);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

app.use(errorMiddleware);

export default app;