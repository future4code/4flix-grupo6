import { v4 } from 'uuid'

import {RandomIdGenerator} from '../business/usecases/Series/CreateSerieUseCase'

export interface RandomIdGenerator {
    generate(): string
}


export class V4IdGenerator implements RandomIdGenerator {
  generate(): string {
    return v4()
  }

}

}

