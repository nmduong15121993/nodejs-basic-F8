const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));
// Template engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('new');
});

app.get('/search', (req, res) => {
  console.log(req.query.q);
  const data = req.query.q;
  res.render('search');
});

app.listen(port, () => console.log('Listent in port' + port));
