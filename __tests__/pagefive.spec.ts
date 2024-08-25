import { describe, expect, it, vi, test, beforeEach, afterEach, afterAll} from 'vitest'
import { getUsers } from '../utils/users'

describe("page 5 mock test", () => {
    it('getUsers', () => {
        const fn = vi.fn(getUsers) // mock the getUsers function
        let usersList = 
        [
            {
                id: "1",
                name: "John Doe",
                email: "john.doe@amundi-fc.com",
                phone: "0123456789"
            },
            {
                id: "2",
                name: "John Doe",
                email: "john.doe@amundi-fc.com",
                phone: "0123456789"
            }
        ]

        expect (vi.isMockFunction(fn)).toBe(true) // check if fn is a mock function
        fn.mockReturnValue(
            Promise.resolve(usersList)
        ) // mock return value

        expect(getUsers()).resolves.toEqual(usersList)
    })
})