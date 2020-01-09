import { SearchSerieGateway } from './../../gateways/Series/SearchSerieGateway';
import { Series } from '../../entities/Series';

export class SearchSerieUseCase {
  constructor(private serieGateway: SearchSerieGateway) {}

  async execute(searchSerieInput: SearchSerieInput): Promise<SearchSerieOutput> {
    const series: Series[] = await this.getSeriesFiltered(searchSerieInput.query, searchSerieInput.filter)

    return {
      results: series.filter(serie => {
        return {
          id: serie.getId(),
          title: serie.getTitle(),
          synopsis: serie.getSynopsis(),
          picture: serie.getPicture(),
        }
      })
    }
  }
}

export interface GetDetailSerieInput {
  serieId: string
}

export interface SearchSerieOutput {
  results: Array<{
    id: string;
    title: string;
    synopsis: string;
    picture: string;
  }>;
}