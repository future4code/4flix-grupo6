import { Episode } from './../../entities/Episode';
import { CreateEpisodeUseCase } from './CreateEpisodeUseCase';
import { RandomIdGenerator } from './../../../services/V4IdGenerator';
import { CreateSerieGateway } from '../../gateways/Series/CreateSerieGateway';
import { Series } from '../../entities/Series';


export class CreateSerieUseCase {
  constructor(
    private serieGateway: CreateSerieGateway,
    private idGenerator: RandomIdGenerator
  ) {}

  async execute(input: CreateSerieInput, episode: Episode[]): Promise<CreateSerieOutput> {
    const serie = new Series(
      input.title,
      input.date,
      input.synopsis,
      input.link,
      input.picture,
      input.episodes,
      this.idGenerator.generate()
    );

    await this.serieGateway.createSerie(serie, episode);
    const message: CreateSerieOutput = {
      msg: 'Série criada com sucesso!'
    };
    return message;
  }
}

export interface CreateSerieInput {
  title: string;
  date: Date;
  synopsis: string;
  link: string;
  picture: string;
  episodes: Episode[];
}

export interface CreateSerieOutput {
  msg: string;
}
