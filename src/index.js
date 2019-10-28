const getCountBefore = (array, value) => {
  const nextIndex = array.findIndex((x => x > value))
  return nextIndex === -1
    ? array.length
    : nextIndex
}

const getLine = (text, index) => {
  const newLines = []
  let newLineIndex
  while (newLineIndex !== -1) {
    newLineIndex = text.indexOf('\n', newLineIndex + 1)
    if (newLineIndex > -1) {
      newLines.push(newLineIndex)
    }
  }
  const countBefore = getCountBefore(newLines, index)
  return countBefore + 1
}

const getColumn = (text, index) => {
  const previousNewLine = text.lastIndexOf('\n', index)
  return previousNewLine > -1
    ?  index - previousNewLine
    : index + 1
}

export const getLocations = (text = '', blacklist = []) => {
  const locations = []

  blacklist.map((item) => {
    const regex = new RegExp(item, 'g')
    let result = regex.exec(text)
    while (result) {
      const [
        matchedValue,
      ] = result
      locations.push({
        text: matchedValue,
        line: getLine(text, result.index),
        column: getColumn(text, result.index),
      })
      result = regex.exec(text)
    }
  })

  return locations
}
