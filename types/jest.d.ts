
declare namespace jest {
  interface Matchers<R, T = {}> {
    toEqualGraphQLSchema(expected: string): R
    toEqualGraphQLType(expected: string): R
  }
}

declare const blabla: string

export {}
