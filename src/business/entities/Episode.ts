export class Episode {
  constructor(
    private title: string,
    private length: number,
    private synopsis: string,
    private link: string,
    private picture: string,
    private id?: string
  ) {}

  createNewEpisode() {
    const newEpisode = {
      title: this.title,
      length: this.length,
      synopsis: this.synopsis,
      link: this.link,
      picture: this.picture,
      id: this.id
    };
    return newEpisode;
  }
}
