const connectToMongo=require("./db");
connectToMongo();
const express = require('express')
const app = express()
const port = 5000
var cors=require('cors')
app.use(cors({
  origin: 'https://your-github-yashrxx.github.io', // Change to your frontend URL
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))
app.listen(port, () => {
  console.log(`urbanBasket backend listening on port http://localhost:${port}`)
})