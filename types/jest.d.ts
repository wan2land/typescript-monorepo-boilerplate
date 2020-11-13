
declare global {
  namespace jest {
    interface Matchers<R, T> {
      toEqualJson(expected: any): R
    }
  }

  interface HelloWorld {
    message: string
  }
}

export {}
