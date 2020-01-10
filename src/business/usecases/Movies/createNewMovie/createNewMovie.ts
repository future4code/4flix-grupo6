import { newMovieGateway } from "../../../gateways/Movies/newMovieGateway";
import { RandomIdGenerator } from "../../../../services/V4IdGenerator";
import { MovieInfo, Movie } from "../../../entities/Movie";


export class CreateNewMovieUseCase {
    constructor(
        private gateway: newMovieGateway,
        private idGenerator: RandomIdGenerator
    ){}

    async execute(input: MovieInfo) {
        const newMovie = new Movie(input, this.idGenerator.generate());

        await this.gateway.saveMovie(newMovie);

        const result = {
            message: "New movie created successfuly." 
        }
    
        return result;
    }
}