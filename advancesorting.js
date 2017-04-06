//Say we have a list of students that we would like to sort in alphabetical order. If students have the same name, then we prioritize the older student first.

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var x = students.sort(function(a, b){
var nameA = a.name;
var nameB = b.name;

if (nameA < nameB) { return -1;}
if (nameA > nameB) { return 1;}

return a.age - b.age;
});

console.log(x);


