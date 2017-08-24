const Singleton = (function() {
  let instance = null;

  function createInstance() {
    // private methods and variables
    const privateVariable = 'i am a private variable';

    function privateMethod() {
      console.log('i am a private method');
    }

    return {
      // public methods and variables
      publicMethod() {
        console.log('i am a public method');
      },
      publicVariable: 'I am a public variable'
    };
  }

  return {
    // get the singleton instance or create one
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  }
})();

const instance1 = Singleton.getInstance(); // creates an instance
const instance2 = Singleton.getInstance(); // returns existing one
console.log(instance1 === instance2); // true
