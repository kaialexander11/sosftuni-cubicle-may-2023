//console.log('Hello world');
const express = require('express');
//const path = require('path');
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./routes');
 
const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(routes);

//require('./config/expressConfig')(app); => valid, but old, same as the one above
//app.get('/', homeController.getHome);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));