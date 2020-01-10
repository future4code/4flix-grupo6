import { Episode } from './../../entities/Episode';
import { Series } from '../../entities/Series';
import knex from 'knex';

export interface CreateSerieGateway {
  createSerie(serie: Series, episode: Episode[]): Promise<knex>;
}
