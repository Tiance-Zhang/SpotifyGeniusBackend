const path = require('path');
require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
});
const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 9090;

app.use(cors())
.use(cookieparser());
//configure routes
const routes = require('./routes/routes');
routes(app);

console.log('Listening on port: ' + port);
app.listen(port);