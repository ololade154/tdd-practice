import { describe, test, expect } from 'vitest';
import { divide } from '../src/functions/divide';

describe('divide function', () => {
  test('6 ÷ 2 = 3', () => {
    expect(divide(6, 2)).toBe(3);
  });

  test(' 5 divide by zero returns null', () => {
    expect(divide(5, 0)).toBe(null);
  });
});
