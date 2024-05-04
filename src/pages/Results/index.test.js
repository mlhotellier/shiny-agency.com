import { getUrlParams } from './'

describe('The getUrlParams function', () => {
  it('should construct parameters correctly', () => {
    const answers = {
      1: '1',
      2: '2',
      3: '1',
    }
    const expectedState = 'a1=1&a2=2&a3=1'
    const result = getUrlParams(answers)
    expect(result).toEqual(expectedState)
  })
  it('should return an empty string for an empty answers object', () => {
    const answers = {}
    const expectedState = ''
    const result = getUrlParams(answers)
    expect(result).toEqual(expectedState)
  })
  it('should concatenate params with an &', () => {
    const answers = {
      1: 'answer1',
      2: 'answer2',
      3: 'answer3',
    }
    const expectedState = 'a1=answer1&a2=answer2&a3=answer3'
    const result = getUrlParams(answers)
    expect(result).toEqual(expectedState)
  })
})
