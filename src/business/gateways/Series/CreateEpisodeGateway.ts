import { Episode } from './../../entities/Episode';

export interface CreateEpisodeGateway {
  createEpisode(episode: Episode): Promise<void>;
}
