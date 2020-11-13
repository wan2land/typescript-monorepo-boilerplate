import { sum } from '@typemonoplate/core'

export class CustomNumber {

  constructor(public self: number) {
  }

  add(other: CustomNumber | number) {
    return new CustomNumber(sum(other instanceof CustomNumber ? other.self : other, this.self))
  }
}
