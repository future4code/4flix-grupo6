import express, {Request, Response} from 'express'
import { CreateNewMovieUseCase } from '../business/usecases/Movies/createNewMovie/createNewMovie'
import { MovieDatabase } from '../data/Movies/movieDatabase'
import { V4IdGenerator } from '../services/V4IdGenerator'
import { MovieInfo } from '../business/entities/Movie'


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/createMovie', async (req: Request, res: Response) => {
    const movieGateway = new MovieDatabase()
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

    const result = await useCase.execute(input)
    
    res.send(result)
});

app.get('/search/movie/:id', async (req: Request, res: Response) => {
    const movieGateway = new MovieDatabase()
    const useCase = new V4IdGenerator()

    const idToSearch = req.params.id;
     
})

export default app