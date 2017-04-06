
//Sort the array numerically not lexicographicaly

var array = [10, 2, 5, 1, 9];
var sort = array.sort(sortFunction);
console.log(sort);


function sortFunction(a, b){
   return  a - b;
}