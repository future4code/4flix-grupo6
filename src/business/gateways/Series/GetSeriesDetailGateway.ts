import { Series } from '../../entities/Series';

export interface CreateSerieGateway {
  getDetailSerie(serie: Series): Promise<void>
}