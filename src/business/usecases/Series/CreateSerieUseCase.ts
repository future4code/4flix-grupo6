import { Episode } from './../../entities/Episode';
import { RandomIdGenerator } from './../../../services/V4IdGenerator';
import { CreateSerieGateway } from '../../gateways/Series/CreateSerieGateway';
import { Series } from '../../entities/Series';

export class CreateSerieUseCase {
  constructor(
    private serieGateway: CreateSerieGateway,
    private idGenerator: RandomIdGenerator
  ) {}

  async execute(input: CreateSerieInput) {
    const newEpisode = input.episodes.map(episodies => {
      return new Episode(
        episodies.title,
        episodies.length,
        episodies.link,
        episodies.picture,
        episodies.synopsis,
        this.idGenerator.generate()
      );
    });

    const serie = new Series(
      input.title,
      input.date,
      input.synopsis,
      input.link,
      input.picture,
      newEpisode,
      this.idGenerator.generate()
    );

    const result = { connection: await this.serieGateway.createSerie(serie) };

    return result;
  }
}

export interface CreateSerieInput {
  title: string;
  date: Date;
  synopsis: string;
  link: string;
  picture: string;
  episodes: CreateEpisodeInput[];
}

export interface CreateEpisodeInput {
  title: string;
  length: number;
  link: string;
  picture: string;
  synopsis: string;
}
