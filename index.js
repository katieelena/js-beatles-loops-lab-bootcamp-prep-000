function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i<4; i++) {
    array.push (musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(factsArray) {
  var newArray = []
  var i = 0
  while (i < factsArray.length) {
    newArray[i] = factsArray[i] + '!!!'
    i++
  }
  return newArray
}
