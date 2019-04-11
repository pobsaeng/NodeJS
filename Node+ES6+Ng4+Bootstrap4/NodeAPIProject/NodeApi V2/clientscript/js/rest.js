function containsAll(haystack) {
  for (var i = 1; i < arguments.length; i++) {
    var needle = arguments[i];
	console.log( needle );
	
    if (haystack.indexOf(needle) === -1) {
      return false;
    }
  }
  return true;
}