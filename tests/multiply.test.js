import { multiply } from '../src/functions/multiply';
import { describe, test, expect } from 'vitest';

describe('multiply function', () => {
  test('2 multiply 5 to equal 10', () => {
    expect(multiply(2, 5)).toBe(10);
  });
  test('1 multiply 6 to equal 6', () => {
    expect(multiply(1, 6)).toBe(6);
  });
});
