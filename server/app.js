const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('config');

const app = express();

app.use(morgan('short'));
app.use(cors());
app.use(express.json({extended: false}));
app.use(express.urlencoded({extended: true}));
app.set('port', process.env.PORT || config.get('port'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.all('*', (req, res) => {
  res.sendStatus(404);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

async function start() {
  try {
    app.listen(app.get('port'),
      () => console.log(`App has been started on PORT: ${app.get('port')}... \n====================`));
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start();

module.exports = app;
