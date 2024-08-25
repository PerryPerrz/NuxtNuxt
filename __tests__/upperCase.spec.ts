import { describe, expect, it, vi} from 'vitest'
import { upperCase } from '../utils/string'

//.only sur une suite de test permet de ne lancer que cette suite de test et pas les autres. 
//.only sur un test permet de ne lancer que ce test et pas les autres.
describe('upperCase function', () => {
  it('run', () => {
    //console.log('run dindon run')
    expect(upperCase('hello')).toBe('HELLO')
  })

  it('run with empty string', () => {
    expect(upperCase('')).toBe('')
  })

  it('run Promise', async () => {
    await new Promise((resolve) => { setTimeout(resolve, 1000) });

    expect(upperCase('hello')).toBe('HELLO')
  })

  it('should failed with empty string', () => {
    expect(upperCase('')).not.toBe('hello')
  })

  it.skip('skipped test', () => {
    expect(upperCase('')).toBe('hello')
  })

  it.todo('todo test', () => {
    expect(upperCase('')).toBe('hello')
  })

  /**
  it.only('only test', () => {
    expect(upperCase('')).toBe('hello')
  })**/

  describe("testing w/ different cases", () => {
    it('run PascalCase', () => {
      let a = "DindonDindon";
      expect(upperCase(a)).toBe('DINDONDINDON');
    })

    it('run kebab-case', () => {
      let a = "dindon-dindon";
      expect(upperCase(a)).toBe('DINDON-DINDON');
    })

    it('run snake_case', () => {
      let a = "dindon_dindon";
      expect(upperCase(a)).toBe('DINDON_DINDON');
    })

    it('run camelCase', () => {
      let a = "dindonDindon";
      expect(upperCase(a)).toBe('DINDONDINDON');
    })
  })

  describe("parallel testing", () => {
    it.concurrent('run test 1', async ({ expect }) => { expect(upperCase('hello')).toBe('HELLO')})
    it.concurrent('run test 2', async ({ expect }) => { expect(upperCase('glouglou')).toBe('GLOUGLOU')})
  })

  describe.concurrent("parallel testing v2", () => {
    it('run test 1', async ({ expect }) => { expect(upperCase('hello')).toBe('HELLO')})
    it('run test 2', async ({ expect }) => { expect(upperCase('glouglou')).toBe('GLOUGLOU')})
  })

  // Snapshot permet de tester si une fonction retourne toujours le même résultat. 
  describe("snapshot testing", () => {  
    it('upperCase', () => {
      const result = upperCase('foobar')
      expect(result).toMatchSnapshot()
    })

    //Si l'on ne veut pas créer de fichier snapshot, on peut utiliser la fonction toMatchInlineSnapshot. (qui va stocker le snapshot directement dans le param de la fct)
    it('upperCase inline', () => {
      const result = upperCase('foobar')
      expect(result).toMatchInlineSnapshot(`"FOOBAR"`)
    })
  })

  // Mock test
  describe("mock test", () => {
    it('upperCase', () => {
      const fn = vi.fn(upperCase) // mock upperCase function
      const fnBis = vi.fn(((str: string) => str.toLowerCase())) // mock function

      expect (vi.isMockFunction(fn)).toBe(true) // check if fn is a mock function
      fn.mockReturnValue('HELLO') // mock return value
      expect(fn('hello')).toBe('HELLO') // call mock function
      expect(fn.mock.calls[0]).toEqual(['hello']) // check if mock function has been called with the right arguments

      // reset mock function
      fn.mockClear()
      expect(fn.mock.calls.length).toBe(0) // check if mock function has been called 0 times

      expect(fnBis(fn('hello'))).toBe('hello') // call mock function
    })
  })
})