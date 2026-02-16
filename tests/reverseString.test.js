import { describe, test, expect } from 'vitest';
import { reverseString } from '../src/functions/reverseString';

describe('reverseString function', () => {
  test('reverses hello to olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverses abc to cba', () => {
    expect(reverseString('abc')).toBe('cba');
  });
});
