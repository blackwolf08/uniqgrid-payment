const express = require('express');
const app = express();
const port = 3005;
const apiRoute = require('./routes/api');
const viewRoute = require('./routes/views');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.set('view engine', 'ejs');
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.redirect('/views/payment-view');
});

app.use('/api', apiRoute);
app.use('/views', viewRoute);

app.listen(port, () => console.log(`App listening on port ${port}!`));
