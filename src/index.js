//console.log('Hello world');
const express = require('express');
//const path = require('path');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');
 
const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);
//require('./config/expressConfig')(app); => valid, but old, same as the one above

app.use(homeController);

//app.get('/', homeController.getHome);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));