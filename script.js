const cardCvc = document.querySelector("#card-cvc");
const cardNumber = document.querySelector(".numerals");
const cardName = document.querySelector("#card-name");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const formName = document.querySelector("input[name='cardholder']");
const formNumber = document.querySelector("input[name='number']");
const formMonth = document.querySelector("input[name='month']");
const formYear = document.querySelector("input[name='year']");
const formCvc = document.querySelector("input[name='cvc']");
const submitButton = document.querySelector("input[type='submit']");
const continueButton = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const entryForm = document.querySelector("#entry-form");
const confirmationPage = document.querySelector("#confirmation");


// Function to write the cardholder's name on the card
formName.addEventListener("input", function() {
    cardName.innerText = this.value;
    console.log(this)
    if (this.value === "") {
        cardName.innerText = "Jane Appleseed"
    }
})

// Function to automatically add spaces in the Number Form Field and Fill in Numbers on CC
formNumber.addEventListener("input", function (e) {
    let number = formNumber;
    number = number.value.split(" ").join("");
    let fixedNumber = number.match(/.{1,4}/g).join(" ");
    formNumber.value = fixedNumber;  
    cardNumber.innerText = this.value;
    if (this.value === "") {
        cardNumber.innerText = "0000 0000 0000 0000"
    }
})
// Current issue with this function: won't reset if you delete everything in the form field. To revisit later.

// Function to write the month on the card
formMonth.addEventListener("input", function() {
    cardMonth.innerText = this.value;
    if (this.value === "") {
        cardMonth.innerText = "00"
    }
})

// Function to write the year on the card
formYear.addEventListener("input", function() {
    cardYear.innerText = this.value;
    if (this.value === "") {
        cardYear.innerText = "00"
    }
})

// Function to write the cvc on the card
formCvc.addEventListener("input", function() {
    cardCvc.innerText = this.value;
    if (this.value === "") {
        cardCvc.innerText = "000"
    }
})

https://www.w3schools.com/js/js_validation_api.asp

// Function to check if Month is a number
formMonth.addEventListener("input", function() {
    let monthNumber = Number(this.value);
    console.log(this)
    if (Number.isNaN(monthNumber)) {
        formMonth.style.border = "1px solid red";
        formMonth.style.outline = "1px solid red";
    } else {
        formMonth.style.border = "1px solid hsl(249, 99%, 64%)";
        formMonth.style.outline = "1px solid hsl(278, 94%, 30%)";
    }
})

// Function to check if Year is a number
formYear.addEventListener("input", function() {
    let yearNumber = Number(this.value);
    console.log(this.value)
    if (Number.isNaN(yearNumber)) {
        formYear.style.border = "1px solid red";
        formYear.style.outline = "1px solid red";
    } else {
        formYear.style.border = "1px solid hsl(249, 99%, 64%)";
        formYear.style.outline = "1px solid hsl(278, 94%, 30%)";
    }
})

// Function to check if CVC is a number
formCvc.addEventListener("input", function() {
    let cvcNumber = Number(this.value);
    console.log(this.value)
    if (Number.isNaN(cvcNumber)) {
        formCvc.style.border = "1px solid red";
        formCvc.style.outline = "1px solid red";
    } else {
        formCvc.style.border = "1px solid hsl(249, 99%, 64%)";
        formCvc.style.outline = "1px solid hsl(278, 94%, 30%)";
    }
})

submitButton.addEventListener("click", function() {
    entryForm.style.display = "none";
    confirmationPage.style.display = "block";
})

continueButton.addEventListener("click", function () {
    
    confirmationPage.style.display = "none";
    entryForm.style.display = "block";
    
})

