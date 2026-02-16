import { describe, test, expect } from 'vitest';
import { findMax } from '../src/functions/findMax';

describe('findMax function', () => {
  test('finds max in [1,3,2]', () => {
    expect(findMax([1, 3, 2])).toBe(3);
  });

  test('finds max in [10,5,20]', () => {
    expect(findMax([10, 5, 20])).toBe(20);
  });
});
