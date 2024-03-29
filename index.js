const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');

const { logErrors, boomErrorHandler, errorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const whitelist = process.env.WHITELIST.split(',');
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}

app.use(cors(corsOptions));

app.get('/', (req,res) => {
  res.send('Bikeshop Backend Home');
})

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})