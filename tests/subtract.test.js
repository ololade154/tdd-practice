import { subtract } from '../src/functions/subtract';
import { describe, test, expect } from 'vitest';

describe('subtract function', () => {
  test('6 - 3 = 3', () => {
    expect(subtract(6, 3)).toBe(3);
  });
  test('-1 -1 = 0', () => {
    expect(subtract(-1, -1)).toBe(0);
  });
});
