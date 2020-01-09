import { CreateSerieGateway } from '../../gateways/Series/CreateSerieGateway';
import { CreateSerieUseCase, CreateSerieInput, RandomIdGenerator, CreateSerieOutput } from './CreateSerieUseCase';
import { Series } from '../../entities/Series';

test('Testing serie creator', async () => {
  const createSerieGateway: CreateSerieGateway = {
    createSerie(serie: Series): Promise<CreateSerieOutput> {
      return ;
    }
  };

  const idGenerator: RandomIdGenerator = {
    generate(): string {
      return 'abc'
    }
  }

  const useCase = new CreateSerieUseCase(createSerieGateway, idGenerator);
  const input: CreateSerieInput = {
    id: '',
    title: '',
    date: new Date,
    synopsis: '',
    link: '',
    picture: '',
    episodes: []
  };

  const result = await useCase.execute(input)
  expect(result.id).toBe('abc')

});
