
// This program will be compiled by node

let str = "help!";
console.log("convert str in to uppercase ", str.toUpperCase());



let str2 = "AdityaPratap";
// predict output
console.log(str2.slice(4, 9) == "yaPra");
console.log(str2.indexOf("P") == 6);
console.log(str2.replace("Pratap", "papa"));
let str3;
str3 = str2.split("Aditya")
console.log(str3);
console.log(str3[1].replace(/a/g, "A"));
// /a/g is the global attribute we added to replace the  all the 'a' in the string with 'A' recursively



console.log("kkrrkkkrrrkkkkrrrrrkkkkkrrrrrkkrkrkrkrkrkrkrkrkrkrkrkrkkkkkrrrrrk".replace(/rr/g, "land"));


