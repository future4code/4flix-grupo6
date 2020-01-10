export class Episode {
  constructor(
    private title: string,
    private length: number,
    private synopsis: string,
    private link: string,
    private picture: string,
    private id?: string
  ) {}

  public getId() {
    return this.id;
  }

  public getTitle() {
    return this.title;
  }

  public getLength() {
    return this.length;
  }

  public getLink() {
    return this.link;
  }

  public getPicture() {
    return this.picture;
  }

  public getSynopsis() {
    return this.synopsis;
  }
}
