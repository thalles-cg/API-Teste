import express from 'express';

const app = express();
app.use(express.json());

const users = [];

app.post('/usuarios', (req, res) => {
   res.send('Ok')
})

app.get('/usuarios', (req, res) => {
   res.send('Ok')
})

app.get('/', (req, res) => {
  res.send('Bem-vindo');
});

export default app;
