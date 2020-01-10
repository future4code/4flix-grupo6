import { Series } from './../../business/entities/Series';
import { CreateSerieGateway } from './../../business/gateways/Series/CreateSerieGateway';
import knex from 'knex'

export class CreateSerieDB implements CreateSerieGateway {
    private connection: knex;

    constructor(){
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'davi',
                password: '63eeb24017ec39b561de0ffb818d5b12',
                database: 'davi'
            }
        });
    }

    async createSerie(serie: Series): Promise<knex> {
        if (!serie.getId()) {
            throw new Error('Id not found');
        };
        
        return this.connection
    }
  }