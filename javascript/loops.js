
for(let i=0;i<=10;i++) {
    console.log(i);
}

let browsers=["Firefox", "Chrome", "Safari","Edge"]
for(let browser of browsers) { //for of loop will give the actual value in an array
    console.log(browser);
    if(browser == "Safari") {
        console.log("This is the browser looking to launch");
        break; //breaks the loop when Safari is found
    }
}

let fruits=["Apple", "Banana", "Mango", "Orange"]

for(let fruit in fruits) { //for in loop will give each fruit index
    console.log(fruit +"-----"+fruits[fruit]);

}

let person={
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key +"-----"+person[key]);
}

