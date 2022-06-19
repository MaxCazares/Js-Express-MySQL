const dbconnection = require('../../config/dbconnection');

module.exports = app => {
    const connection = dbconnection();

    app.get('/', (req, res) => {
        connection.query('Select * from news', (err, result) => {
            // console.log(result);
            res.render('news/news', {
                news: result
            });
        });
    });

    app.post('/news', (req, res) => {
        const {title, news} = req.body;
        connection.query('INSERT INTO news set?', {
            title,
            news
        }, (err, result) => {
            res.redirect('/');
        });
    });
};