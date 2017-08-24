var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 }
  obj[key] = value
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 }
  obj.value = key
  return obj
}
