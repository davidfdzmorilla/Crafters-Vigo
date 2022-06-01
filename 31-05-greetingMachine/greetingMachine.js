const greetingMachine = (name) => {

  let greeting = 'Hola, '
  let names

  if (name !== null) {
    names = name.split(',')
  } else if (name === null) {
    return `${greeting}mundo.`
  }
  if (names.length === 1 && name !== null && name !== name.toUpperCase()) {
    return greeting + name + '.'
  } else if (name == name.toUpperCase()) {
    greeting = greeting.toUpperCase()
    return greeting + name + '!'
  } else if (names.length === 2) {
    return greeting + names[0] + ' y' + names[1]
  } else if (names.length > 2) {
    for (let i = 0; i < names.length; i++) {
      if (i === names.length - 2) {
        greeting += names[i] + ', ' + 'y'
      } else if (i === names.length - 1) {
        greeting += names[i]
      } else {
        greeting += names[i] + ','
      }
    }
    return greeting
  }

}

console.log(greetingMachine('Ana, Bartolo, Carlota, Daniel'))

module.exports = greetingMachine

