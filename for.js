let cart = [
  { name: "rice", price: 120, quantity: 2 },
  { name: "oil", price: 300, quantity: 1 },
  { name: "sugar", price: 90, quantity: 3 }
]; 

function applydiscount(items, percentage){
    let total = 0;
    for (let i =0; i < cart.length; i++){
        let itemTotal = cart[i].price* cart[i].quantity;
        total +=itemTotal;
    }
    
    let discount = (total * percentage) /100;
    console.table(items);
    return total-= discount;


}
console.log(applydiscount(cart,10));
