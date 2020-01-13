import { Series } from '../../entities/Series';

export interface SearchSerieGateway {
  searchSerie(serie: Series): Promise<void>
}