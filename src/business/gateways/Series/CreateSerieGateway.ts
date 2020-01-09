import { CreateSerieOutput } from './../../usecases/Series/CreateSerieUseCase';
import { Series } from '../../entities/Series';

export interface CreateSerieGateway {
  createSerie(serie: Series): Promise<CreateSerieOutput>
}