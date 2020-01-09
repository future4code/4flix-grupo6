export type MovieInfo = {
    title: string,
    release_date: string,
    length: number,
    synopsis: string,
    link: string,
    picture: string,
    id?: string
}

export class Movie {
    constructor(private input: MovieInfo, id: string){
        this.input.id = id
    }

    public createNewMovie(): MovieInfo {
        const newMovie: MovieInfo = {
            title: this.input.title,
            release_date: this.input.release_date,
            length: this.input.length,
            synopsis: this.input.synopsis,
            link: this.input.link,
            picture: this.input.picture,
            id: this.input.id
        }

        return newMovie
    }

    public getId() {
        return this.input.id;
    }

    public getMovieById(id: string): MovieInfo {
        return this.input;
    }
}

