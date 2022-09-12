class Formatter {
}

static capitalize(string); {
  return string[0].toUpperCase() + string.slice(1)
}
static sanitize(string); {
  //removes all non-alphanumeric characters except for dashes, single quotes and spaces
  //the characters inside the [] are retained
  return string.replace(/[^-,'A-Za-z0-9 ]+/g, '')

}
static titleize(string);{
  //capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from
  let set = new Set(['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']);
  let splitString = string.toLowerCase().split(' ');
  for (var i = 0; i < splitString.length; i++) {
    if(set.has(splitString[i])){
      splitString[i] = splitString[i].charAt(0).toLowerCase() + splitString[i].slice(1);
    }else{splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);}  
  }
  let firstCharacterNotUpper = splitString.join(' ')
  return firstCharacterNotUpper.charAt(0).toUpperCase()+ firstCharacterNotUpper.slice(1)
}
