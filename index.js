const express = require('express');
const cors = require('cors');

const revenueRoutes = require('./src/routers/revenue-report');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(revenueRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
