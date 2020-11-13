import { sum } from './helpers'


describe('@typemonoplate/core helpers', () => {
  it('test helepr sum', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})

describe('jest configuration', () => {
  // see `jest.setup.js`, `types/jest.d.ts`
  it('test setupFilesAfterEnv success', () => {
    expect({ foo: 'foo string!' }).toEqualJson({ foo: 'foo string!' })
  })

  it('test setupFilesAfterEnv fail', () => {
    expect({ foo: 'foo string!' }).toEqualJson({ bar: 'bar string!' })
  })
})
