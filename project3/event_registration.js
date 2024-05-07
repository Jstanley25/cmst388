/*
		Your Name: <Enter Your Name>
		Last Modified Date: <Enter The Date in mm/dd/yyyy format>
		File: event_registration.js
		File Description: <Enter a brief paragraph to describe the purpose of this file>
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/
       // Set the time for the countdown (in seconds)
        var timeLeft = 600; // 10 minutes = 10 * 60 seconds

        // Update the timer every second
        var timerInterval = setInterval(function() {
            var minutes = Math.floor(timeLeft / 60);
            var seconds = timeLeft % 60;

            // Add leading zero if seconds are less than 10
            seconds = seconds < 10 ? '0' + seconds : seconds;

            // Update the timer display
            document.getElementById('timer').innerHTML = minutes + ':' + seconds;

            // Decrease time left by 1 second
            timeLeft--;

            // Check if the timer has reached zero
            if (timeLeft < 0) {
                clearInterval(timerInterval);
                alert("Your timer has expired!");
                location.href = location.href; // Redirect the user back to the same page
            }
        }, 1000);

// Calculate the Total
function calculateTotal() {
    var numTicketsInput = document.querySelector("#numTickets");
    var totalCostInput = document.querySelector("#totalCost");
    var msgTickets = document.querySelector("#msgTickets");
    var contactInformation = document.querySelector("#contactInformation");

    // Resets the error message and background color
    msgTickets.innerHTML = "";
    numTicketsInput.style.backgroundColor = "white";

    var numTickets = parseInt(numTicketsInput.value);

    // Checks to see if input is within range
	let numRange = /^[1-3]$/
    if (!numRange.test(numTickets)) {
        msgTickets.innerHTML = "Please enter a number between " + minTickets + " and " + maxTickets;
        numTicketsInput.style.backgroundColor = "#FFCCCC"; // Change background color to alert user
        contactInformation.style.display = "none"; // Hide contact information section
        return;
    }

    // Calculate total cost
    var totalCost = (numTickets * costPerTicket) + (ticketSurcharge * numTickets);

    // Update total cost input field
    totalCostInput.value = '$' + totalCost.toFixed(2);

    // Display contact information section
    contactInformation.style.display = "block";
}

// Item #2: Complete Purchase
function completePurchase() {
    var nameInput = document.querySelector("#name");
    var emailInput = document.querySelector("#email");
    var msgname = document.querySelector("#msgname");
    var msgemail = document.querySelector("#msgemail");

    // Reset error messages and background colors
    msgname.innerHTML = "";
    msgemail.innerHTML = "";
    nameInput.style.backgroundColor = "white";
    emailInput.style.backgroundColor = "white";

    // Validation for name input
    if (nameInput.value.trim() === "") {
        msgname.innerHTML = "Please enter your name";
        nameInput.style.backgroundColor = "#FFCCCC"; // Change background color to alert user
    }

    // Validation for email input
	let emailExpression = /^[a-z0-9._%+-]{1,64}@[a-z0-9.-]{1,252}\.[a-z]{1,3}$/i;
    if (!emailExpression.test(emailInput.value.trim())) {
        msgemail.innerHTML = "Please enter your email address";
        emailInput.style.backgroundColor = "#FFCCCC"; // Change background color to alert user
    }

    // If no errors in input, provide purchase confirmation
    if (msgname.innerHTML === "" && msgemail.innerHTML === "") {
        var totalCost = document.getElementById('totalCost').value;
        alert("Thank you for your purchase! Your total amount is: " + totalCost);
        clearInterval(timerInterval); // Stop the timer
    }
}