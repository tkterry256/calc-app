import 'dotenv/config';

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Calc');
});

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Calc server listening on port ${PORT}`);
});
