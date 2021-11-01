const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
var methodOverride = require('method-override');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect DB
db.connect();

// methodOverride
app.use(methodOverride('_method'));

// Pulic Files
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));
// Template engine
app.engine('hbs', handlebars({ 
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    }
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes Init
route(app);

app.listen(port, () => console.log('App Listent in port' + port));
