const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  let a = 5;
  let b =10;

  let c = a + b;

  res.send('Hello NodeJs Express');
})

app.listen(port, () => console.log('Listent in port' + port));
