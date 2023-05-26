const handlebars = require('express-handlebars');

function handlebarsConfig(app) {
    // Handlebars config
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
        //layoutsDir: ''
    }));
    app.set('view engine', 'hbs');
    app.set('views', 'src/views');
}

module.exports = handlebarsConfig;