let orders = [
    { id: 101, amount: 2500 },
    { id: 102, amount: 800 },
    { id: 103, amount: 1500 },
    { id: 104, amount: 500 }
];

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function placeOrder(orderList) {
    for (let i = 0; i < orderList.length; i++) {
        await delay(1000); // Simulate processing time

        if (orderList[i].amount > 2000) {
            console.log("Order " + orderList[i].id + ": Priority order, free shipping");
        } else if (orderList[i].amount >= 500) {
            console.log("Order " + orderList[i].id + ": Standard order, shipping Rs. 50");
        } else {
            console.log("Order " + orderList[i].id + ": Small order, shipping Rs. 100");
        }
    }

    console.log("All orders processed");
}

placeOrder(orders);