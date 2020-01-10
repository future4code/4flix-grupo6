import { searchMovieGateway } from './../../../gateways/Movies/searchMovieGateway';


export class SearchMovieUseCase {
    constructor(private gateway: searchMovieGateway ){}

    async execute() {
        return await this.gateway.getMovie()
    }
}