import { Series } from '../../entities/Series';

export interface CreateSerieGateway {
  createSerie(serie: Series): Promise<void>;
}
