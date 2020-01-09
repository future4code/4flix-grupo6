import { v4 } from 'uuid'

export interface RandomIdGenerator {
    generate(): string
}

export class V4IdGenerator implements RandomIdGenerator {
  generate(): string {
    return v4()
  }
}