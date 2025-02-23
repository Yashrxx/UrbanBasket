const connectToMongo=require("./db");
connectToMongo();
const express = require('express')
const app = express()
const port = 5000
var cors=require('cors')
const allowedOrigins = [
  "http://localhost:3000",   // ✅ Local Development
  "https://yashrxx.github.io" // ✅ GitHub Pages
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))
app.listen(port, () => {
  console.log(`urbanBasket backend listening on port http://localhost:${port}`)
})