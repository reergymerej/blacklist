import * as mod from '.'

describe('locations', () => {
  it('should return a list of locations', () => {
    const text = `I am Jeremy.
    My wife is Amanda.
    My son is Sammy.
    My daughter is Jemma.`
    const blacklist = [
      'Jeremy',
      'Amanda',
      'Sammy',
      'Jemma',
    ]
    expect(mod.getLocations(text, blacklist)).toEqual([
      {
        text: 'Jeremy',
        line: 1,
        column: 6,
      },
      {
        text: 'Amanda',
        line: 2,
        column: 16,
      },
      {
        text: 'Sammy',
        line: 3,
        column: 15,
      },
      {
        text: 'Jemma',
        line: 4,
        column: 20,
      },
    ])
  })
})
