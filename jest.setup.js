
const originMatchers = global[Symbol.for('$$jest-matchers-object')].matchers

expect.extend({
  toEqualJson(received, expected) {
    return originMatchers.toEqual(
      JSON.stringify(received, null, '  '),
      JSON.stringify(expected, null, '  ')
    )
  },
})
