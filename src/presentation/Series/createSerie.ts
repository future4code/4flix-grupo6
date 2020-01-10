import { CreateSerieUseCase } from './../../business/usecases/Series/CreateSerieUseCase';
import { Series } from './../../business/entities/Series';
import express, { Request, Response } from 'express';
import { V4IdGenerator } from '../../services/V4IdGenerator';
import { CreateSerieDB } from '../../data/Series/CreateSerieDB';
import { CreateSerieInput } from '../../business/usecases/Series/CreateSerieUseCase';

export interface newSerieInput {
  title: string;
  date: Date;
  synopsis: string;
  link: string;
  picture: string;
  episodes: Object[];
}

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post('/createSerie', async (req: Request, res: Response) => {
  const serieGateway = new CreateSerieDB();
  const idGenerator = new V4IdGenerator();
  const useCase = new CreateSerieUseCase(serieGateway, idGenerator);

  const input: newSerieInput = {
    title: req.body.title,
    date: req.body.date,
    synopsis: req.body.synopsis,
    link: req.body.link,
    picture: req.body.picture,
    episodes: [
      {
        title: req.body.title,
        length: req.body.length,
        synopsis: req.body.synopsis,
        link: req.body.link,
        picture: req.body.picture
      }
    ]
  };

  const result = await useCase.execute(input);

  const message = 'New movie created successfuly.';

  const query = result.connection('Movies').insert(result.movie);
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
