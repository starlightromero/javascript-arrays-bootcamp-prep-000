var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var beginningArray = array.unshift(`${element}`);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(`${element}`);
}

function addElementToEndOfArray(array, element) {
  var endArray = array.push(`${element}`);
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(`${element}`);
}

function accessElementInArray(array, index) {

}
