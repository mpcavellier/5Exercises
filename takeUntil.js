// Lodash's example code for takeWhile shows us that instead of just supporting callback functions, it can support "iteratee shorthand" using objects and arrays. We can safely ignore these examples since our function will be simpler and not need to support this.

// We will be implementing a function quite similar to this one, but isn't present in their library: takeUntil.

// It will take in two parameters as well:

// The array to work with
// The callback (which Lodash calls "predicate")

const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      array.splice(i, 1);
      return array;
    }
  }
}

// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

// To keep things simple, the callback should only be provided one value: The item in the array.
