
/*
// Given an input of array, 
// which is made of items with >= 3 properties
let items = [
    {color: 'red', type: 'tv', age: 18}, 
    {color: 'silver', type: 'phone', age: 20},
    {color: 'blue', type: 'book', age: 17}
  ] 
  // an exclude array made of key value pair
  const excludes = [ 
    {k: 'color', v: 'silver'}, 
    {k: 'type', v: 'tv'}, 
    ...
  ] 
  function excludeItems(items, excludes) { 
    excludes.forEach( pair => { 
      items = items.filter(item => item[pair.k] === item[pair.v])
    })
   
    return items
  } 
  */


/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
    const excludeMap = new Map()
  for (let {k, v} of excludes) {
    if (!excludeMap.has(k)) {
      excludeMap.set(k, new Set())
    }
    excludeMap.get(k).add(v)
  }
  
  return items.filter(item => {
    return Object.keys(item).every(
      key => !excludeMap.has(key) || !excludeMap.get(key).has(item[key])
    )
  })
}

/*test cases*/
/*
excludeItems() should return an array  

excludeItems() should work for the example   

excludeItems() should support multiple v for same k in exlude array  

excludeItems() should work even exlude array is empty
*/