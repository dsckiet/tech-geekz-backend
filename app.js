const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({ path: './config/.ENV' });

connectDB();

const course = require('./routes/courses');
const profile = require('./routes/profile');

const app = express();
app.use(cors());

// Body Parser
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/courses', course);

app.use('/profile', profile);

app.use('/', (req, res) => {
	return res.status(200).json({
		success: true,
		msg: `Home Page`
	});
});

app.listen(PORT, err => {
	if (err) {
		console.log('Error in running server');
		return;
	}
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
