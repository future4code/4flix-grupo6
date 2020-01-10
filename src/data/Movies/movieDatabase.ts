import { searchMovieGateway } from './../../business/gateways/Movies/searchMovieGateway';
import { Movie } from './../../business/entities/Movie';
import { newMovieGateway } from './../../business/gateways/Movies/newMovieGateway';
import knex from 'knex';

export class MovieDataBase implements newMovieGateway, searchMovieGateway {
  private connection: knex;

  constructor() {
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

  public async saveMovie(movie: Movie): Promise<void> {
    if (!movie.getId()) {
      throw new Error('Id not found');
    }

    await this.connection('Movies').insert(movie.createNewMovie());
  }

  public async getMovie(): Promise<void> {}
}
