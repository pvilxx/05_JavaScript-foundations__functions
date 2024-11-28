/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

const isAdditionGreaterThanFifty = function(base,addition){
    result = base + addition;
    if(result > 50){
        return true;
    }
    if(result == 50){
        return true;
    }

    return false;
}

export default isAdditionGreaterThanFifty;