import { normalizeURL } from './crawl.js'
import { test, expect } from '@jest/globals'


test('normalizeURL protocol', () => {
    const input = 'https://tfd.nexon.com/en/news/2601132'
    const actual = normalizeURL(input)
    const expected = 'tfd.nexon.com/en/news/2601132'

    expect(actual).toEqual(expected)
})

test('normalizeURL slash', () => {
    const input = 'https://Tfd.Nexon.com/en/news/2601132/'
    const actual = normalizeURL(input)
    const expected = 'tfd.nexon.com/en/news/2601132'

    expect(actual).toEqual(expected)
})