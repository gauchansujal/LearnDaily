let deliveries = [
    { id: 201, distance: 1.5, status: "on-the-way" },
    { id: 202, distance: 4, status: "on-the-way" },
    { id: 203, distance: 8, status: "cancelled" },
    { id: 204, distance: 6, status: "on-the-way" },
    { id: 205, distance: 2, status: "on-the-way" }
];

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkDeliveries(deliveryList) {
    for (let i = 0; i < deliveryList.length; i++) {
        await delay(6000); // Simulate checking time

        if (deliveryList[i].status === "cancelled") {
            console.log("Delivery " + deliveryList[i].id + ": Delivery cancelled");
        } else if (deliveryList[i].distance <= 2) {
            console.log("Delivery " + deliveryList[i].id + ": Arriving in 10 minutes");
        } else if (deliveryList[i].distance <= 5) {
            console.log("Delivery " + deliveryList[i].id + ": Arriving in 25 minutes");
        } else {
            console.log("Delivery " + deliveryList[i].id + ": Arriving in 45 minutes");
        }
    }

    console.log("All deliveries checked");
}

checkDeliveries(deliveries);