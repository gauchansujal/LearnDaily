let seatsAvailable = 5;

let bookings = [
    { id: 401, type: "student", seats: 1 },
    { id: 402, type: "regular", seats: 2 },
    { id: 403, type: "student", seats: 2 },
    { id: 404, type: "regular", seats: 3 },
    { id: 405, type: "regular", seats: 6 }
];

function movieticket(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processBookings(ticketbookings) {
    for (let i = 0; i < ticketbookings.length; i++) {
        await movieticket(1500);
        let b = ticketbookings[i];

        if (b.seats > seatsAvailable) {
            console.log(`Booking ${b.id}: Failed, not enough seats`);
        } else {
            let price = b.seats * 200;

            if (b.type === "student" && b.seats === 1) {
                price = price * 0.8;
            }

            seatsAvailable = seatsAvailable - b.seats;
            console.log(`Booking ${b.id}: Confirmed, Price: ${price}`);
        }

        console.log(`Seats available: ${seatsAvailable}`);
    }

    console.log(`Booking window closed. Final seats available: ${seatsAvailable}`);
}

processBookings(bookings);