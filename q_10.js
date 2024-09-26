


/*
Say you have multiple versions of a program, write a program that will find and return the first bad revision given a isBad(version) function.

Versions after first bad version are supposed to be all bad versions.

notes

Inputs are all non-negative integers
if none found, return -1
*/


// This is a JavaScript coding problem from BFE.dev 

/**
 * @typedef {(version: number) => boolean} IsBad
 */

/**
 * @param {IsBad} isBad
 * @return {(v: number) => number}
 */
function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    let left = 0;
    let right = version;
    let found = -1;
    while(left!=right){
      let mid = Math.ceil((left + right)/2);

      if(isBad(mid)){
        if(isBad(mid-1))
            right = mid;
        else{
            found = mid;
            break;
         }
      }
      else{
        left = mid;
      }
    }
    return found
    // write your code to return the first bad version
    // if none found, return -1
  }
}

// console.log(firstBadVersion((i)=>i>=6)(5))



/*test cases

firstBadVersion((i) => i >= 4)(100)  

firstBadVersion((i) => i >= 4)(4)  

firstBadVersion((i) => i >= 5)(3)  

firstBadVersion((i) => i >= 1)(1)  

firstBadVersion((i) => i >= 1)(2)  
*/