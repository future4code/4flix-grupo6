import { Episode } from '../business/entities/Episode';
import { CreateSerieUseCase } from '../business/usecases/Series/CreateSerieUseCase';
import express, { Request, Response } from 'express';
import { V4IdGenerator } from '../services/V4IdGenerator';
import { CreateSerieDB } from '../data/Series/CreateSerieDB';
import { CreateSerieInput } from '../business/usecases/Series/CreateSerieUseCase';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post('/createSerie', async (req: Request, res: Response) => {
  const serieGateway = new CreateSerieDB();
  const idGenerator = new V4IdGenerator();
  const useCase = new CreateSerieUseCase(serieGateway, idGenerator);

  const input: CreateSerieInput = {
    title: req.body.title,
    date: req.body.date,
    synopsis: req.body.synopsis,
    link: req.body.link,
    picture: req.body.picture,
    episodes: req.body.episodes.map((ep: { title: string; length: number; synopsis: string; link: string; picture: string; }) => {
      return new Episode(ep.title, ep.length, ep.synopsis, ep.link, ep.picture);
    })
  };

  const result = await useCase.execute(input);

  res.send(result);
});

export default app;