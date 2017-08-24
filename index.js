var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var object = { prop: 1 }
  object[key] = value
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
