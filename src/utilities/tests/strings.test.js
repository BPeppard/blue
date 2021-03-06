import {
  isWord,
  nameToInitials,
  wordHasSpaces,
  truncateMiddle
} from '../strings'

describe('nameToInitials', () => {
  test('Returns empty string if no args are passed', () => {
    expect(nameToInitials()).toBe('')
  })
})

describe('isWord', () => {
  test('Returns false for non-words', () => {
    expect(isWord()).toBeFalsy()
    expect(isWord([])).toBeFalsy()
    expect(isWord('')).toBeFalsy()
    expect(isWord({})).toBeFalsy()
    expect(isWord(true)).toBeFalsy()
  })

  test('Returns true for words', () => {
    expect(isWord('w')).toBeTruthy()
    expect(isWord('w o r d')).toBeTruthy()
    expect(isWord(123)).toBeTruthy()
    expect(isWord(0)).toBeTruthy()
  })
})

describe('wordHasSpaces', () => {
  test('Returns false for non-words', () => {
    expect(wordHasSpaces()).toBeFalsy()
    expect(wordHasSpaces([])).toBeFalsy()
    expect(wordHasSpaces('')).toBeFalsy()
    expect(wordHasSpaces({})).toBeFalsy()
    expect(wordHasSpaces(true)).toBeFalsy()
    expect(wordHasSpaces(123)).toBeFalsy()
    expect(wordHasSpaces('word')).toBeFalsy()
    expect(wordHasSpaces('super-long-word_with_hyphen(underscore)')).toBeFalsy()
    expect(wordHasSpaces(' starts-with-space')).toBeFalsy()
  })

  test('Returns true for words with spaces', () => {
    expect(wordHasSpaces('super longworddddddddd')).toBeTruthy()
    expect(wordHasSpaces(' super longworddddddddd')).toBeTruthy()
  })
})

describe('truncateMiddle', () => {
  test('should perform a basic test', () => {
    expect(truncateMiddle('the quick brown', 5, 5, '...'))
      .toBe('the q...brown')
  })

  it('should perform auto fill in ellipses', () => {
    expect(truncateMiddle('the quick brown', 5, 5))
      .toBe('the q…brown')
  })

  it('should have return empty string when null', () => {
    expect(truncateMiddle(null)).toBe('')
  })

  it('should have return empty string when empty', () => {
    expect(truncateMiddle('')).toBe('')
  })

  it('should have handle no backLength', () => {
    expect(truncateMiddle('the quick brown', 5, 0))
      .toBe('the q…')
  })

  it('should have handle 0 backLength, 0 frontLength', () => {
    expect(truncateMiddle('the quick brown', 0, 0))
      .toBe('the quick brown')
  })
})
