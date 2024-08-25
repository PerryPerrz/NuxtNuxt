import { upperCase } from '../utils/string'

export function sayHello(message : string) {
    alert(`Hello ${upperCase(message)}!`)
}