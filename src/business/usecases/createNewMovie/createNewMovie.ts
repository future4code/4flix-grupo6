import { newMovieGateway } from "../../gateways/newMovieGateway";
import { RandomIdGenerator } from "../../../services/V4IdGenerator";
import { MovieInfo, Movie } from "../../entities/Movie";


export class CreateNewMovieUseCase {
    constructor(
        private movieGateway: newMovieGateway,
        private idGenerator: RandomIdGenerator
    ){}

    async execute(input: MovieInfo) {
        const newMovie = new Movie(input, this.idGenerator.generate());

        const result = {
            movie: newMovie.createNewMovie(),
            connection: await this.movieGateway.saveMovie(newMovie) 
        }
    
        return result;
    }
}