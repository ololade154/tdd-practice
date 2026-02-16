import { add } from '../src/functions/add';
import { describe, test, expect } from 'vitest';

describe('add function', () => {
  test('add 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });
  test('add 5 + 3 to equal 8', () => {
    expect(add(5, 3)).toBe(8);
  });
});
