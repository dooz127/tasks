const express = require('express');
const dotenv = require('dotenv').config();

require('./db/mongoose');
const userRouter = require('./routes/user-routes');
const taskRouter = require('./routes/task-routes');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// routes
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
