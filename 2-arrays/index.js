/**
 * Arrays
 *
 * always use camel case where needed
 *
 * Make sure to write the question/instruction and then the answers below
 *
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * initalise a variable called colors to the values: blue, green, red.
 * initalise a variable called more colors two to the values: yellow, orange.
 * console log colors. Then concatenate the two arrays with the colors first
 * then the more colors.
 */

var colors = ["blue", "green", "red"];
var moreColors = ["yellow", "orange"];

var allColors = colors.concat(moreColors);
console.log(allColors);

/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * initialise the variable `fruits` to a 2-Dimensional array containing the values below:
 *          column[0]   column[1]  column[2] column 3
 * Row 1    apple       orange      pear    lemon
 * Row 2    banana      kiwi        lime    mango
 * then use console.table() to showcase the information in a table.
 * console log out I am eating a _pear_ and _lime_.
 */

var fruits = [
	["apple", "orange", "pear", "lemon"],
	["banana", "kiwi", "lime", "mango"],
];

console.table(fruits);
console.log(`I am eating a ` + fruits[0][2] + ` and ` + fruits[1][2]);
