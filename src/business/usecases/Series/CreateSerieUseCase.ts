import { CreateSerieGateway } from '../../gateways/Series/CreateSerieGateway';
import { Series } from '../../entities/Series';
import { Episode } from '../../entities/Episode';

export interface RandomIdGenerator {
  generate(): string;
}

export class CreateSerieUseCase {
  constructor(
    private serieGateway: CreateSerieGateway,
    private idGenerator: RandomIdGenerator
  ) {}

  async execute(input: CreateSerieInput): Promise<CreateSerieOutput> {
    const serie = new Series(
      this.idGenerator.generate(),
      input.title,
      input.date,
      input.synopsis,
      input.link,
      input.picture,
      input.episodes
    );

    await this.serieGateway.createSerie(serie);
    const message: CreateSerieOutput = {
      msg: "Série criada com sucesso!"
    }
    return message
  }
}

export interface CreateSerieInput {
  id: string;
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
