import knex from 'knex'
import { newMovieGateway } from '../business/gateways/newMovieGateway';
import { Movie } from '../business/entities/Movie';



export class CreateMovieDB implements newMovieGateway {
    private connection: knex;

    constructor(){
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'davi',
                password: '63eeb24017ec39b561de0ffb818d5b12',
                database: 'davi'
            }
        });
    }

    async saveMovie(movie: Movie, ): Promise<knex> {
        if (!movie.getId()) {
            throw new Error('Id not found');
        };
        
        return this.connection
    };
}