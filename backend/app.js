
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';

import dotenv from 'dotenv';

const port = process.env.PORT || 5000;
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));


if (process.env.NODE_ENV !== 'production') {
  dotenv.config(
    {
      path: 'backend/config/.env'
    }
  );
}
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;