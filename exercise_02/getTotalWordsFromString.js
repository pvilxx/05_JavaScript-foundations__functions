/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * 
 * @param {*} base 
 * @returns 
 */

const getTotalWordsFromString = function(base){
    if(typeof base === "string"){
        return base.length;
    } 
    return -1
}

export default getTotalWordsFromString;