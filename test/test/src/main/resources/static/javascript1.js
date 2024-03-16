//Jquery
let tickets = [];

function handlePurchase() {
    let film = $("#film").val();
    let antall = $("#antall").val();
    let fname = $("#fname").val();
    let etternavn = $("#etternavn").val();
    let telefonnr = $("#telefonnr").val();
    let email = $("#email").val();

    let ticket = {
        film: film,
        antall: antall,
        fname: fname,
        etternavn: etternavn,
        telefonnr: telefonnr,
        email: email
    };

    $.ajax({
        url: "/leggeTil",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(ticket),
        success: function (data) {
            hentAlle();
            console.log("Added ticket!", data); // Log the data returned by the server
        }
    });
}

function displayTickets(billetter) {
    let ticketListDiv = $("#ticketList");
    ticketListDiv.html(""); // Clear previous content
    for(let i = 0; i < billetter.length; i++) {
        let ticket = billetter[i];
        let ticketInfo = 'Film: ' + ticket.film + ', Antall: ' + ticket.antall +
            ', Navn: ' + ticket.fname + ' ' + ticket.etternavn +
            ', Telefon: ' + ticket.telefonnr + ', Email: ' + ticket.email;
        let ticketDiv = $("<div></div>");
        ticketDiv.text(ticketInfo);
        ticketListDiv.append(ticketDiv); // Append the ticket div to the list
    }
}

function hentAlle() {
    $.get("/hentListe", function (data) {
        displayTickets(data);
    })
}

function deleteAllTickets() {
    $.post("/slett", function (){
        displayTickets([]);
    })
}

function clearForm() {
    $("#film").val("");
    $("#antall").val("");
    $("#fname").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#email").val("");
}
