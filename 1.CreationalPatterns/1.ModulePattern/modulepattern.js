// Advantages!
// 1. True encapsulation in JavaScript (we have private variables!!)

// Disadvantages:
// 1. We access public and private members differently, so when we wish to change
// visibility, we have to make changes to each place the member was used.
// 2. Inability to create automated unit tests for private members

const testModule = (function() {
  let counter = 0; // private variable

  const privatePrintingMethod = (value) => console.log(`private method: ${value}!`);

  // public methods that can access variables in this function scope
  return {
    incrementCounter() {
      return counter++;
    },
    resetCounter() {
      console.log(`counter value prior to reset: ${counter}`);
      counter = 0;
    },
    publicPrintMethod(value) {
      privatePrintingMethod(value);
    }
  }
})();

// increment our private counter variable
testModule.incrementCounter();
testModule.incrementCounter();

// check counter value and reset
testModule.resetCounter();

testModule.publicPrintMethod('hello!'); // outputs: `private method: hello!`
