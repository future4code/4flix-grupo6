import { Episode } from './../../entities/Episode';
import { CreateEpisodeGateway } from '../../gateways/Series/CreateEpisodeGateway';
import { RandomIdGenerator } from './../../../services/V4IdGenerator';

export class CreateEpisodeUseCase {
  constructor(
    private episodeGateway: CreateEpisodeGateway,
    private idGenerator: RandomIdGenerator
  ) {}

  async execute(inputEpisode: CreateEpisodeInput): Promise<Object> {
    const episode = new Episode(
      inputEpisode.title,
      inputEpisode.length,
      inputEpisode.synopsis,
      inputEpisode.link,
      inputEpisode.picture,
      this.idGenerator.generate()
    );

    return episode.createNewEpisode();
  }
}

export interface CreateEpisodeInput {
  id: string;
  title: string;
  length: number;
  link: string;
  picture: string;
  synopsis: string;
}
