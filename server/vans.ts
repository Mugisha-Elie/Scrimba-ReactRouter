import express, { Request, Response } from 'express';
import cors from 'cors';
import vans from './vans.json';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/vans', (req: Request, res: Response) => {
  res.json(vans);
});


app.get('/api/vans/:id', (req: Request, res: Response) => {
    const id = req.params?.id as string;
    const van = vans.find(v => v.id === parseInt(id));
    if (!van) return res.status(404).send('Van not found');
    res.json(van);
});

app.listen(PORT, () => {
  console.log(`Van API running at http://localhost:${PORT}`);
});