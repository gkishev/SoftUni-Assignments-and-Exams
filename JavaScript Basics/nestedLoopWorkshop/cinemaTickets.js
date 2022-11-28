function cinemaTickets (input) {

    let index = 0;
    let command = input[index];
    let totalTickets = 0;

    let student = 0;
    let standard = 0;
    let kid = 0;

    while(command !== "Finish") {
        let name = command;
        index++;
        let freeSeats = Number(input[index]);
        index++; 

        let typeOfTicket = input[index];
        let ticketCounter = 0;

        while (typeOfTicket !== "End") {
            ticketCounter++;

            switch (typeOfTicket) {
                case "standard": standard++; break;
                case "student": student++; break;
                case "kid": kid++; break;
            }

            if (ticketCounter >= freeSeats) {
                break;
            }
            index++;
            typeOfTicket = input[index];
        }
        console.log(`${name} - ${((ticketCounter / freeSeats) * 100).toFixed(2)}% full.`)
        index++;
        command = input[index];
    }
    console.log(`Total tickets: ${totalTickets = standard + student + kid}`);
    console.log(`${((student / totalTickets) * 100).toFixed(2)}% student tickets.`)
    console.log(`${((standard / totalTickets) * 100).toFixed(2)}% standard tickets.`)
    console.log(`${((kid / totalTickets) * 100).toFixed(2)}% kids tickets.`)




}

cinemaTickets(["The Matrix",

"20",

"student",

"standard",

"kid",

"kid",

"student",

"student",

"standard",

"student",

"End",

"The Green Mile",

"17",

"student",

"standard",

"standard",

"student",

"standard",

"student",

"End",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"]);