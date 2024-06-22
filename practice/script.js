function valid() {
    var formValid = true;
    var errorMessages = []; // Array to collect error messages
    
    var firstName = document.getElementById('firstName');
    if (!firstName.value.match(/^[A-Za-z]{1,30}$/)) {
        formValid = false;
        errorMessages.push('First name must be alphabetic and up to 30 characters long.');
    }

    var lastName = document.getElementById('lastName');
    if (!lastName.value.match(/^[A-Za-z]{1,30}$/)) {
        formValid = false;
        errorMessages.push('Last name must be alphabetic and up to 30 characters long.');
    }

    var emailAddress = document.getElementById('email');
    if (!emailAddress.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        formValid = false;
        errorMessages.push('Enter a valid email address.');
    }

    var mobileNumber = document.getElementById('mobileNumber');
    if (!mobileNumber.value.match(/^\d{10}$/)) {
        formValid = false;
        errorMessages.push('Mobile number must be a 10 digit number.');
    }

    var pinCode = document.getElementById('pinCode');
    if (!pinCode.value.match(/^\d{6}$/)) {
        formValid = false;
        errorMessages.push('PIN code must be a 6 digit number.');
    }

    // Display error messages if any
    if (!formValid) {
        var errorMessageContainer = document.getElementById('error-messages');
        errorMessageContainer.innerHTML = ''; // Clear previous error messages

        errorMessages.forEach(function(message) {
            var p = document.createElement('p');
            p.textContent = message;
            errorMessageContainer.appendChild(p);
        });

        // Prevent form submission
        return false;
    }

    return true; // Return the form validity status
}
