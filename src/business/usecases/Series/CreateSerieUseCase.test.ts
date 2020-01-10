import { CreateSerieGateway } from '../../gateways/Series/CreateSerieGateway';
import { CreateSerieUseCase, CreateSerieInput, CreateSerieOutput } from './CreateSerieUseCase';
import { Series } from '../../entities/Series';
import { RandomIdGenerator } from '../../../services/V4IdGenerator';
import Knex = require('knex');

test('Testing serie creator', async () => {
  
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
