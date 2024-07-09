const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/authRouter');
const adminRouter = require('./routes/adminRouter');
const userRouter = require('./routes/userRouter');
const storeRouter = require('./routes/storeRouter');
const ratingRouter = require('./routes/ratingRouter');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/store', storeRouter);
app.use('/rating', ratingRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
