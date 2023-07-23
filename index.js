const connectToMongo = require('./database/db');
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

connectToMongo();
const port = 5000
app.use(express.json())



app.get('/', (req, res) => {
  res.send('Typing Backend');
})

//Available Routes
app.use('/api/scores', require('./routes/scores'));
app.use('/api/texts', require('./routes/texts'));

app.listen(port, () => {
    console.log(`App running at port http://localhost:${port} successfully.`);
})