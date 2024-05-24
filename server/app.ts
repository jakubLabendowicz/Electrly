const express = require("express");
import routes from './src/routes/Routes';
import dotenv from "dotenv";
dotenv.config();

const port = 8080 || process.env.PORT;
const app = express();
app.set('trust proxy', true);
app.use('/api/v1', routes)
app.listen(port, () => {
  console.log(`[Forest ID Server]: Server is running at http://localhost:${port}`);
});
