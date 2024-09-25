/*
window.setTimeout() could be used to schedule some task in the future.

Could you implement clearAllTimeout() to clear all the timers ? This might be useful when we want to clear things up before page transition.

For example

setTimeout(func1, 10000)
setTimeout(func2, 10000)
setTimeout(func3, 10000)
// all 3 functions are scheduled 10 seconds later
clearAllTimeout()
// all scheduled tasks are cancelled.
note

You need to keep the interface of window.setTimeout and window.clearTimeout the same, but you could replace them with new logic
*/

/* My Solution */

function clearAllTimeout() {
    // your code here
    let id = setTimeout(()=>{console.log("done")},0);
    while(id){
      clearTimeout(id);
      id--;
    }
  }

/* Test Cases */

/*

window.setTimeout should work  

window.clearTimeout should work  

clearAllTimeout should work 

*/