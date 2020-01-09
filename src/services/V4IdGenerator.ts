import { v4 } from 'uuid'
import {RandomIdGenerator} from '../business/usecases/Series/CreateSerieUseCase'

export class V4IdGenerator implements RandomIdGenerator {
  generate(): string {
    return v4()
  }
}
