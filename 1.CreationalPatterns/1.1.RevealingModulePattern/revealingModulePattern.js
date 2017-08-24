// Advantages!
// 1. Easier readability and a bit more consistent syntax of our scripts

// Disadvantages:
// 1. if a private function refers to a public function, that public function can't
// be overridden if a patch is necessary. This is because the private function will
// continue to refer to the private implementation and the pattern doesn't apply to
// public members, only to functions.

const revealingModule = (function() {
  let privateCounter = 0;

  function privateIncrement() {
    privateCounter++;
  }

  function publicIncrement() {
    privateIncrement();
  }

  function publicGetCount() {
    return privateCounter;
  }

  return {
    increment: publicIncrement,
    count: publicGetCount
  };
})();

revealingModule.increment();
console.log(revealingModule.count()); // 1
