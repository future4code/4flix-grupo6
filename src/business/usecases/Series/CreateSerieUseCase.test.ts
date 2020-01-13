// import { CreateSerieGateway } from '../../gateways/Series/CreateSerieGateway';
// import {CreateSerieUseCase, CreateSerieInput} from './CreateSerieUseCase';
// import { Series } from '../../entities/Series';
// import { RandomIdGenerator } from '../../../services/V4IdGenerator';
// import Knex = require('knex');
// import { Episode } from '../../entities/Episode';

// test('Testing serie creator', async () => {
  
//   const episodeGateway: CreateSerieGateway = {
//     createEpisode(episode: Episode[]): Promise<void> {
//       return Promise.resolve()
//     }  }
  
//   const idGenerator: RandomIdGenerator = {
//     generate(): string {
//       return 'abc'
//     }
//   }

//   const useCase = new CreateSerieUseCase(CreateSerieGateway, idGenerator);
//   const input: CreateSerieInput = {
//     title: '',
//     date: new Date,
//     synopsis: '',
//     link: '',
//     picture: '',
//     episodes: []
//   };

//   const result = await useCase.execute(input)
//   expect(result.connection).toBe('abc')

// });
