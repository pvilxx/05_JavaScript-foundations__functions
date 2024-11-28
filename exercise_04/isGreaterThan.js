/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 * 
 * @param {*} base 
 * @param {*} threshold 
 * @returns 
 */

const isGreaterThan = function(base, threshold){
    if(base<threshold){
        return false;
    }
    return true;
}

export default isGreaterThan;