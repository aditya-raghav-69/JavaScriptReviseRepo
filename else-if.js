

function checkPrice() {
    let size =prompt("Enter the size");
// console.log(typeof(size));

if (size == "xl") {
    console.log(`size is  ${size} and price is 250 `);
}
else if (size == "l") {
    console.log(`size is ${size} and price is 200`);

}
else if (size == "m") {
    console.log(`size is ${size} and price is 150`);
}
else if (size == "s") {
    console.log(`size is ${size} and price is 50`);
}
else {
    console.log("inalid size Re Enter the Size again  ");
    checkPrice();
}
}

checkPrice();