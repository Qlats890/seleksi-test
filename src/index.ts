import express from 'express';
import cors from 'cors';
import { routers } from './routers/index';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routers);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});