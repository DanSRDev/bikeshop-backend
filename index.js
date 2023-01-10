const express = require('express');
const routerApi = require('./routes');

const { logErrors, boomErrorHandler, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req,res) => {
  res.send('Bikeshop Backend Home');
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})