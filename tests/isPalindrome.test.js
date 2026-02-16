import { describe, test, expect } from 'vitest';
import { isPalindrome } from '../src/functions/isPalindrome';

describe('isPalindrome function', () => {
  test('racecar is palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('hello is not palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });
});
