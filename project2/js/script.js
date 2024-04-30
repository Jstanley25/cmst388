// Error handler
let errors;

// Form Elements
let firstname = document.getElementById("firstName");
let lastname = document.getElementById("lastName");
let address = document.getElementById("address");
let city = document.getElementById("city");
let state = document.getElementById("state");
let zip = document.getElementById("zip");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let confirmemail = document.getElementById("confirmEmail");
let meal = document.querySelectorAll('input[name="meal"]');
let contact = document.querySelectorAll('input[type="checkbox"]');

// Regular Expressions
let alpha = /^[a-z]+$/i;
let numeric = /^\d+$/i;
let alphanumeric = /^[a-z\d\-_\s]+$/i;
let emailExpression = /^[a-z0-9._%+-]{1,64}@[a-z0-9.-]{1,252}\.[a-z]{1,3}$/i;
let phoneExpression = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

// Validation Function
function validateForm() {

    errors = 0;
    let contactchecked = document.querySelectorAll('input[type="checkbox"]:checked');
    let mealchecked = document.querySelectorAll('input[name="meal"]:checked');

    //Textboxes
    alpha.test(firstname.value) ? valid(firstname) : invalid(firstname);
    alpha.test(lastname.value) ? valid(lastname) : invalid(lastname);
    alphanumeric.test(address.value) ? valid(address) : invalid(address);
    alpha.test(city.value) ? valid(city) : invalid(city);
    state.value == "" ? invalid(state) : valid(state);
    zip.value.length == 5 && numeric.test(zip.value) ? valid(zip) : invalid(zip);
    phoneExpression.test(phone.value) ? valid(phone) : invalid(phone);
    emailExpression.test(email.value) ? valid(email) : invalid(email);
    confirmemail.value == email.value ? valid(confirmemail) : invalid(confirmemail);

    //Radio and Checkboxes
    mealchecked.length == 0 ? meal.forEach(element => invalid(element)) : meal.forEach(element => valid(element));
    contactchecked.length < 2 ? contact.forEach(element => invalid(element)) : contact.forEach(element => valid(element));

    // Validation Helpers
    function invalid(element) {
        element.classList.add("is-invalid");
        errors++
    }

    function valid(element) {
        element.classList.remove("is-invalid");
    }
    
    return errors > 0 ? false : true;
}