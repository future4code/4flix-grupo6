import { Movie } from "../../entities/Movie";


export interface newMovieGateway {
    saveMovie(movie: Movie): Promise<void>
}; 