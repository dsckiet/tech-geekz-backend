const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/.ENV' });

connectDB();

const course = require('./routes/courses');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/courses', course);

app.listen(PORT, err => {
	if (err) {
		console.log('Error in running server');
		return;
	}
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
