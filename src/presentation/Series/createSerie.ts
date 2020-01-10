import { CreateSerieUseCase } from './../../business/usecases/Series/CreateSerieUseCase';
import express, { Request, Response } from 'express';
import { V4IdGenerator } from '../../services/V4IdGenerator';
import { CreateSerieDB } from '../../data/Series/CreateSerieDB';
import { CreateSerieInput } from '../../business/usecases/Series/CreateSerieUseCase';

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
    episodes: [
      {
        title: req.body.title,
        length: req.body.length,
        link: req.body.link,
        picture: req.body.picture,
        synopsis: req.body.synopsis,
      }
    ]
  };

  const result = await useCase.execute(input);

  const message = 'New Serie created successfuly.';

  const query = result.connection('Series').insert(result);
  query
    .then(result => {
      res.send({
        message: message
      });
    })
    .catch(e => {
      res.send(e);
    });
});

export default app;
