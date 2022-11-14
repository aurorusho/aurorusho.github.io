// Thanks to
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Gets a random value in the interval [start, end)

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  
// Returns a linked list of n random elements that sum the "sum" parameter
const randomDistribution = (n_elements, sum) => {
    /*
    "Just generate N random numbers, compute their sum,
    divide each one by the sum and multiply by M."
    https://stackoverflow.com/questions/2640053/getting-n-random-numbers-whose-sum-is-m/2640079#2640079
    We are ok with this distribution, since we are using it to
    divide the molecules in a volume, and it should not have a
    significant effect on the diffusion across the membrane, it's
    only effect is to alter the initial state and give it randomness\
    as a real world model.
    */

    // Creates an array with n random values between [0, sum)
    const valueArray = [];
    for(let i = 0; i < n_elements; i++){
        valueArray.push(getRandom(0, sum));
    }
    // Gets the sum of this array
    const arraySum = valueArray.reduce(
        (currentSum, value) => currentSum + value
    );
    // Constant used to avoid unnecessary calculations inside loop
    const sumRelation = (sum / arraySum);
    
    // For each random value, divided by the sum of the
    // array. Then multiples by "M", in this case, "sum",
    // that is the highest possible value a random value 
    // could approach.
    for(let index = 0; index < valueArray.length; index++){
        valueArray[index] *= sumRelation;
    }
    return valueArray;
}