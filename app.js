const morgan = require('morgan');
const express = require('express');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

const app = express();


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);

app.get('/', (req, res, next) => {
    res.redirect('/wiki');
})

const PORT = 1337;

const init = async() => {
    await models.db.sync( {
        force: true
    });

    console.log('db synced');
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    })
}

init();
