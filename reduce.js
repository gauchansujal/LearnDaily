let cart = [250, 400, 100];
let total = cart.reduce((sum, price)=>sum + price,0);
console.log(total);