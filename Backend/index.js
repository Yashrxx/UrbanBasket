const connectToMongo=require("./db");
connectToMongo();
const express = require('express')
const app = express()
const port = process.env.PORT || 5001;
var cors=require('cors')
const allowedOrigins = [
  "http://localhost:3001",
  "https://yashrxx.github.io"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`CORS blocked request from: ${origin}`);
        callback(new Error("Not allowed by CORS")); // ⬅️ Proper error handling
      }
    },
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "UrbanBasket Backend is Live!" });
});
app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
  console.log(`UrbanBasket backend listening on port ${port}`);
})