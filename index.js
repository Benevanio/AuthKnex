const  bodyParser = require('body-parser');
const  express = require('express');
const  app = express();
const port = process.env.PORT || 3000;
const dotenv = require('dotenv');
dotenv.config();

const router = require('./routes/routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    });

