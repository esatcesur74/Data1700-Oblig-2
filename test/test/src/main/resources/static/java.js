var tickets = [];

function handlePurchase() {
    var movie = document.getElementById('film').value;
    var quantity = document.getElementById('antall').value;
    var fname = document.getElementById('fname').value;
    var etternavn = document.getElementById('etternavn').value;
    var telefonnr = document.getElementById('telefonnr').value;
    var email = document.getElementById('email').value;

    var ticket = {
        film: film,
        antall: antall,
        fname: fname,
        etternavn: etternavn,
        telefonnr: telefonnr,
        email: email
    };

    tickets.push(ticket);
    displayTickets();
    clearForm();
}

function displayTickets() {
    var ticketListDiv = document.getElementById('ticketList');
    ticketListDiv.innerHTML = '';

    for (var i = 0; i < tickets.length; i++) {
        var ticket = tickets[i];
        var ticketInfo = 'Film: ' + ticket.film + ', Antall: ' + ticket.antall +
            ', Navn: ' + ticket.fname + ' ' + ticket.etternavn +
            ', Telefon: ' + ticket.telefonnr + ', Email: ' + ticket.email;

        var ticketDiv = document.createElement('div');
        ticketDiv.textContent = ticketInfo;
        ticketListDiv.appendChild(ticketDiv);
    }
}

function deleteAllTickets() {
    tickets = [];
    displayTickets();
}

function clearForm() {
    document.getElementById('film').value = 'film1';
    document.getElementById('quantity').value = 1;
    document.getElementById('fname').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefonnr').value = '';
    document.getElementById('email').value = '';
}