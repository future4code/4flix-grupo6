export class Episode {
  constructor(
    private id: string,
    private title: string,
    private length: string,
    private synopsis: string,
    private link: string,
    private picture: string
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
