import { sum } from './helpers'


describe('@typemonoplate/core helpers', () => {
  it('test helepr sum', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})
