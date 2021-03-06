require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes');
var usersRouter = require('./routes/users');
var nextStoryTagsRouter = require('./routes/nextStoryTags');
var booksRouter = require('./routes/books');
var moviesRouter = require('./routes/movies');
var reviewRatingsRouter = require('./routes/reviewRatings');
var thirdPartyBookApiRouter = require('./routes/thridPartyBookApi');
var thirdPartyMovieApiRouter = require('./routes/thirdPartyMovieApi');
const multiRouter = require('./routes/multi');

var app = express();

// NOTE MUST CREATE A FILE CALLED '.env' AND ADD THE DATABASE_URI VALUE INTO IT
const mongoDB = process.env.DATABASE_URI;

// NOTE: console logs for connection to Mongoose and for db errors are kept to aid future development
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})
    .then(() => console.log('Connected to MongoDB with mongoose...'))
    .catch(() => console.log('Uh-oh something went wrong when trying to connect to MongoDB'));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname,'frontend/build')));

// Anything that doesn't match the above, send back index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/nextStoryTags', nextStoryTagsRouter);
app.use('/books', booksRouter);
app.use('/movies', moviesRouter);
app.use('/reviewRatings', reviewRatingsRouter);
app.use('/thirdPartyBookApi', thirdPartyBookApiRouter);
app.use('/thirdPartyMovieApi', thirdPartyMovieApiRouter);
app.use('/multi', multiRouter);

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname,'frontend/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
