var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  newArray = ['${element}', ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('${element}');
}

function addElementToEndOfArray(array, element) {
  newArray = [...array, '${element}'];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('${element}');
}

function accessElementInArray(array, index) {
  
}