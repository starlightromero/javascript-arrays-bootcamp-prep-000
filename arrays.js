var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var beginningArray = [`${element}`, ...${array}];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  ${array}.unshift(`${element}`);
}

function addElementToEndOfArray(array, element) {
  var endArray = [...${array}, `${element}`];
}

function destructivelyAddElementToEndOfArray(array, element) {
  ${array}.push(`${element}`);
}

function accessElementInArray(array, index) {

}
