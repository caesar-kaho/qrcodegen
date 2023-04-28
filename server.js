const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT, () => {
    console.log('Server is running');
  });
  
