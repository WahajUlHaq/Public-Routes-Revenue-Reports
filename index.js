const express = require('express');
const cors = require('cors');

const testRouter = require('./src/routers/test/index');
const userRouter = require('./src/routers/user/index');
require('./src/database/index');

const app = express();
const port = process.env.PORT || 3000;

const whitelist = ['http://localhost:3000', 'http://localhost:4000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(express.json());
app.use(cors(corsOptions));

app.use(testRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
