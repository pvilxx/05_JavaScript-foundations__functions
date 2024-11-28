/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * 
 * @param {*} base 
 * @param {*} threshold 
 * @returns 
 */

const getDistanceFromThreshold = function (base,threshold) {
    if (base > threshold){
        return base - threshold;
    }
        
    if (base < threshold){
        return threshold - base;
    }

    return 0;
  };
  
  export default getDistanceFromThreshold;

/*Funcio optimitzada - CGPT
const getDistanceFromThreshold = function (base, threshold) {
    return Math.abs(base - threshold);
};

export default getDistanceFromThreshold;
*/