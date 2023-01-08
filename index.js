const express = require('express');

const app = express();
const port = 3000;

app.use(express.json);

app.get('/', (req,res) => {
  res.send('Bikeshop Backend Home');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})