function submitForm() {
    // 1. get all the user input values
    let FullName = document.getElementById('Full Name').value;
    let LastName = document.getElementById('Last Name').value;
    let EmailAddress = document.getElementById('Email Address').value;
    let ReasonForContacting = document.getElementById('Reason For Contacting').value;
    console.log(FullName, LastName, EmailAddress, ReasonForContacting);
    // check if all the inputs are filled
    if (FullName != null && LastName != null && EmailAddress != null && ReasonForContacting != false) {
        // show the alert only if all inputs are filled
        alert("Form submitted successfully!")
    } else {
        alert("All fields are required!")
    }
}