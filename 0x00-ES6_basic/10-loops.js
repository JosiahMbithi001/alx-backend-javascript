export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    //let value = array[idx];
    value = appendString + value;
  }

  return array;
}
