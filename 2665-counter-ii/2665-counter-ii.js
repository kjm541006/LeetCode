/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let num = init;
  function increment(){
    return num += 1;
  }

  function decrement(){
    return num -= 1;
  }

  function reset(){
    num = init;
    return init;
  }

  return {increment, decrement, reset};
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */