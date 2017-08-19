/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

//Opion 1) using array and sting methods
// function firstReverse(str) {
//   if (typeof str === "string") {
//     return str.split("").reverse().join("");
//   }else{
//     return  null;
//   }
// }


//Option 2) using a reverse for loop
function firstReverse(str) {
  var backwards = "";
  if(typeof str === "string"){
    for(var i = str.length-1; i>=0; i--){
      backwards += str[i];
    }
  }else{
    return null;
  }
    return backwards;
}

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

function alphaOrder(str) {
  if(typeof str !== "string"){
    return null;
    }else{
    return str.split("").sort().join("");
    }
}

 /** Function: vowelCount
 * The function will take the str parameter being passed in and
 * return the number of vowels in the string
 * @param {string} str
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

function vowelCount(str) {
  var vowelsCount = 0; //creates container to count #vowels.
  //turns the @param into a string using .toString() method.
  if(typeof str !== "string") {
    return null;
  }
  var splitStr = str.split("");
//loop through the string
  for (var i = 0; i < splitStr.length; i++) {
  //if a vowel, add to vowel count
    if(splitStr[i] === "a" || splitStr[i] === "e" || splitStr[i] === "i" || splitStr[i] === "o" || splitStr[i] === "u") {
      vowelsCount += 1;
    }
   } 
    return vowelsCount;
}
 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

 function timeConvert(mins){
  if(typeof mins !== "number"){
    return null;
  }else{
  var hours = Math.floor(mins / 60);
  var minutes = mins % 60;
  return hours + ":" + minutes;
  } 
 }
 console.log(timeConvert(68));

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */

function repeatString(str, N) {
    if (typeof str !== "string" || typeof N !== "number"){
    return null;
  }else if(N < 0){
    return "";
  }else{
  string = str.repeat(N);
  }
  return string;
}
console.log(repeatString("zomg", 3));

/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: repeatString
};
