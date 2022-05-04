import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

const port = Number(process.env.PORT ?? 4000);

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on port ${port}`);
});
