function  total(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        let itemtotal = arr[i].price * arr[i].quantity;
        arr[i].total = itemtotal;
        sum += itemtotal;
    }
    arr.push({ name: "", price: "", quantity: "Grand Total", total: sum });
  console.table(arr);
    return sum;
}
let arr =[
    {name:"jhone", price:20, quantity:2},
    {name:"doe", price:30, quantity:3},
    {name:"smith", price:40, quantity:4}

];
total(arr);