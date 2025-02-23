const connectToMongo = require("./db");
connectToMongo();

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// Define allowed origins dynamically based on environment
const useGitHub = process.env.USE_GITHUB === "true";  // <-- Added environment variable to toggle GitHub mode

const allowedOrigins = useGitHub
  ? ["https://yashrxx.github.io"]  // <-- Only allow GitHub Pages if USE_GITHUB is set
  : ["http://localhost:3000"];  // <-- Default to localhost for local development

console.log(`CORS allowed origins: ${allowedOrigins}`); // <-- Log allowed origins for debugging

// Apply CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`CORS blocked request from: ${origin}`);  // <-- Logs blocked requests
        callback(null, false);
      }
    },
    credentials: true,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`UrbanBasket backend listening on port ${port}`);
});
