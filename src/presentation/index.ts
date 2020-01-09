import express, {Request, Response} from 'express'
import { CreateNewMovieUseCase } from '../business/usecases/createNewMovie/createNewMovie'
import { CreateMovieDB } from '../data/createMovieDB'
import { V4IdGenerator } from '../services/V4IdGenerator'
import { MovieInfo } from '../business/entities/Movie'


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/createMovie', async (req: Request, res: Response) => {
    const movieGateway = new CreateMovieDB()
    const idGenerator = new V4IdGenerator()
    const useCase = new CreateNewMovieUseCase(movieGateway, idGenerator)

    const input: MovieInfo = {
        title: req.body.title,
        release_date: req.body.release_date,
        length: req.body.length,
        synopsis: req.body.synopsis,
        link: req.body.link,
        picture: req.body.picture
    }

    const result = await useCase.execute(input);

    const message = "New movie created successfuly."
    
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
})

export default app