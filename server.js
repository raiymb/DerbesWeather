require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const i18n = require('./config/i18n');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB connection error:', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(i18n.init);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const apiRoutes = require('./routes/apiRoutes');
const pdfRoutes = require('./routes/pdfRoutes');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/api', apiRoutes);
app.use('/pdf', pdfRoutes);

app.use((req, res, next) => {
    res.status(404).render('partials/error', {
        title: "404: Page Not Found",
        errorMsg: "Sorry, we couldn't find the page you're looking for."
    });
});

app.use((error, req, res, next) => {
    console.error(`Global error handler: ${error}`);
    res.status(500).render('partials/error', {
        title: "500: Internal Server Error",
        errorMsg: "There was a problem on the server side. Please try again later."
    });
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
