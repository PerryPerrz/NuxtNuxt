import { expect, test } from 'vitest'
import { sum } from '../utils/sum'

test('sum function', () => {
  expect(sum(1, 2)).toBe(3)
})

test('sum function with negative numbers', () => {
  expect(sum(-1, -2)).toBe(-3)
})

test('resolves to lemon', async () => {
  await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
  await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');
});

test('rejects to octopus', () => {
  return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(
    'octopus',
  );
});

test('rejects to octopus', async () => {
  await expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus');
});