// import { MovieInfo } from './../../entities/Movie';
// import { newMovieGateway } from "../../gateways/newMovieGateway"
// import { Movie } from "../../entities/Movie"
// import { RandomIdGenerator } from "../../../services/V4IdGenerator"


// it("should create a new Movie", async () => {
//     const movieGateway: newMovieGateway = {
//         saveMovie(movie: Movie): Promise<void> {
//           return Promise.resolve()
//         }
//     };

//     const IdGenerator: RandomIdGenerator = {
//         generate(): string {
//             return "testing"
//         }
//     };

//     const useCase = new createNewMovieUseCase(movieGateway, IdGenerator);
//     const input: MovieInfo = {
//         title: "Bastardos Inglórios",
//         date: "09/08/2019",
//         length: "153 min",
//         synopsis: "Durante a Segunda Guerra Mundial, na França, um grupo de judeus americanos conhecidos como Bastardos espalha o terror entre o terceiro Reich. Ao mesmo tempo, Shosanna, uma judia que fugiu dos nazistas, planeja vingança quando um evento em seu cinema reunirá os líderes do partido.",
//         link: "www.linkfalso.com",
//         picture: "www.linkfalso.com",
//     }
    
//     const result = await useCase.execute(input);

//     expect(result.message).toBe("Movie created successfully");
// });