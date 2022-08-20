import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();


app.use(
  cors({
    origin: '*',
    methods: ['GET'],
  })
);

app.use(express.json());
app.set('json spaces', 2);
app.get('/', (req, res) => {
    res.json({message: "Hello World"});
});

app.listen(process.env.PORT, () => {
    console.log('Listening on port 3001!');
}).on('error', (err) => {
    console.log(err);
});