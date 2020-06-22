/* eslint-disable no-undef */

const router = require('./src/router');
const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser = require('body-parser');
const helmet = require('helmet');

require('dotenv').config();

const app = express();

const port = 1900;
const url = process.env.DB_URL;

const mongoose = require('mongoose');
mongoose.connect(url, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

const db = mongoose.connection;
db.once('open', () => {
	console.log('Connected to MongoDB');
});

const sessionSecret = process.env.SESSION_SECRET;
const sessionID = 'sessionID';
const store = new MongoDBStore({
	uri: url,
	collection: 'sessions'
});

app.use(session({
	name: sessionID,
	secret: sessionSecret,
	store: store,
	resave: false,
	saveUninitialized: false,
	cookie: {
		sameSite: true,
		secure: false
	}
}));

app.use(
	helmet()
);

store.on('error', (err) => {
	console.log('Session MongoDB error:' + err);
});

app
	.set('view engine', 'ejs')
	.set('views', 'src/views')
	.use(express.static('src/static'))
	.use(bodyParser.urlencoded({
		extended: true
	}))
	.use(express.json({ limit: '1mb' }))
	.listen(port, () => {
		console.log('The server is running on port ' + port);
	});

app.use(router);