import { Movie } from "../entities/Movie";
import knex from 'knex'


export interface newMovieGateway {
    saveMovie(movie: Movie): Promise<knex>
}; 