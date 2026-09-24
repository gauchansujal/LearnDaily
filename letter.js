let products = ["shirt", "pants", "shoes", "hat"];
let result = products.map((p)=>p[0].toUpperCase()+ p.slice(1));
console.log(result);