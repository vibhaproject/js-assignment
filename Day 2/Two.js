//copywiithin
console.log("copyWithin function");
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.copyWithin(1, 0);
console.log(fruits);

//slice
console.log("slice example")
var age=[18,20,10,12,17];
console.log(age);
var above_18= age.slice(0,2);
console.log(above_18);

//sort
console.log("sort function")
var sort_age = age.sort();
console.log(sort_age)


//string -- search
console.log(" String-search example");
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos);

//slice
console.log(" String-slice example");
var str1 = "Apple, Banana, Kiwi";
var res1 = str1.slice(7, 13);
console.log(res1);

//substring
console.log(" String-substring example");
var str2 = "Apple, mango, Kiwi";
var res2 = str2.substring(7, 12);
console.log(res2);

//replace
console.log(" String-replace example");
var name = "my name is vibha hedaoo";
console.log(name);
var n = name.replace("vibha", "divya");
console.log(n);