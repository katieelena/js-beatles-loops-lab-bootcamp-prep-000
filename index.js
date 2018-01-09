function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i<4; i++) {
    array.push (musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(factsArray) {
  while (factsArray.length > 0) {
    var i = 0
    factsArray[i] = factsArray[i] + '!!!'
    i++
  }
}
