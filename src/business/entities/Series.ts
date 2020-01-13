import { Episode } from './Episode';

export class Series {
  constructor(
    private title: string,
    private date: Date,
    private synopsis: string,
    private link: string,
    private picture: string,
    private episodes: Episode[],
    private id?: string
  ) {}

  getId() {
    return this.id;
  }

  createNewSerie() {
    const newSerie = {
      title: this.title,
      date: this.date,
      synopsis: this.synopsis,
      link: this.link,
      picture: this.picture,
      episodes: this.episodes.map(ep => {
        return ep.createNewEpisode()
      }),
      id: this.id
    };
    return newSerie;
  }
}
