const groceries= ['Sugar', 'Slat','Icecream','Banana','Pepsi','Cola'];
console.log(groceries[1]);
console.log(groceries.length);
console.log(groceries[groceries.length-1]);

const lastElement = groceries.pop();
console.log(lastElement);
groceries.push("Fish","Bread");
const firstThreeItems = groceries.slice(0,3);

///🌶️🌶️🌶️ **Challenge**
groceries.splice(2,1);
groceries.unshift("Kiwi");
console.log(groceries);
groceries.splice(0,2,"ketchup","chili")
console.log(groceries);



