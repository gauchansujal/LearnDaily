let bill = [450, 1200, 300, 250, 1000];

function shopdiscount(discount) {
    for (let i = 0; i < discount.length; i++) {
        let total = 0;

        if (discount[i] > 1000) {
            console.log("Discount 10% on bill");
            total = discount[i] - (discount[i] * 10) / 100;
        } else {
            console.log("No discount on bill");
            total = discount[i];
        }

        console.log("Bill: " + discount[i] + " -> Final: " + total);
    }
}

shopdiscount(bill);
