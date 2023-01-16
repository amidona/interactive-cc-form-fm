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
const continueButton = document.querySelector("#continue");
const inputs = document.querySelectorAll("input");
const entryForm = document.querySelector("#entry-form");
const confirmationPage = document.querySelector("#confirmation");


// Function to deal with Cardholder's Name
formName.addEventListener("input", function () {
    let nameError = document.querySelector("#name-error");
    cardName.innerText = this.value;
    if (formName.value === "") {
        formName.style.outline = "1px solid red";
        formName.style.border = "1px solid red";
        nameError.innerText = "Can't be blank";
        cardName.innerText = "Jane Appleseed"
    } else {
        formName.style.border = "1px solid hsl(249, 99%, 64%)";
        formName.style.outline = "1px solid hsl(278, 94%, 30%)";
        nameError.innerText = ""
   }
})

// Function to deal with Card Number
formNumber.addEventListener("input", function () {
    let numberError = document.querySelector("#number-error");
    if (formNumber.value === "") {
        formNumber.style.outline = "1px solid red";
        formNumber.style.border = "1px solid red";
        numberError.innerText = "Can't be blank";
        cardNumber.innerText = "0000 0000 0000 0000"
    } else if (formNumber.value.includes("/^[a-zA-Z]+$/")) { /////////WORKING ON THIS BIT
        formNumber.style.outline = "1px solid red";
        formNumber.style.border = "1px solid red";
        numberError.innerText = "Wrong format, numbers only";
        let number = formNumber;
        number = number.value.split(" ").join("");
        let fixedNumber = number.match(/.{1,4}/g).join(" ");
        formNumber.value = fixedNumber;  
        cardNumber.innerText = this.value;
    } else {
        formNumber.style.border = "1px solid hsl(249, 99%, 64%)";
        formNumber.style.outline = "1px solid hsl(278, 94%, 30%)";
        numberError.innerText = ""; 
        let number = formNumber;
        number = number.value.split(" ").join("");
        let fixedNumber = number.match(/.{1,4}/g).join(" ");
        formNumber.value = fixedNumber;  
        cardNumber.innerText = this.value;     
    }
})


// Function to deal with Month
formMonth.addEventListener("input", function() {
    const monthNumber = Number(this.value);
    let dateError = document.querySelector("#date-error");
    cardMonth.innerText = this.value;
    if (Number.isNaN(monthNumber)) {
        formMonth.style.border = "1px solid red";
        formMonth.style.outline = "1px solid red";
        dateError.innerText = "Wrong format, numbers only";
    } else if (formMonth.value === "") {
        formMonth.style.border = "1px solid red";
        formMonth.style.outline = "1px solid red";
        dateError.innerText = "Can't be blank";
        cardMonth.innerText = "00"
    } else {
        formMonth.style.border = "1px solid hsl(249, 99%, 64%)";
        formMonth.style.outline = "1px solid hsl(278, 94%, 30%)";
        dateError.innerText = "";
    }
})

// Function to deal with Year
formYear.addEventListener("input", function() {
    let yearNumber = Number(this.value);
    let dateError = document.querySelector("#date-error");
    cardYear.innerText = this.value;
    if (Number.isNaN(yearNumber)) {
        formYear.style.border = "1px solid red";
        formYear.style.outline = "1px solid red";
        dateError.innerText = "Wrong format, numbers only";
    } else if (formYear.value === "") {
        formYear.style.border = "1px solid red";
        formYear.style.outline = "1px solid red";
        dateError.innerText = "Can't be blank";
        cardYear.innerText = "00"
    } else {
        formYear.style.border = "1px solid hsl(249, 99%, 64%)";
        formYear.style.outline = "1px solid hsl(278, 94%, 30%)";
        dateError.innerText = "";
    }
})

// Function to deal with CVC
formCvc.addEventListener("input", function() {
    let cvcNumber = Number(this.value);
    let cvcError = document.querySelector("#cvc-error");
    cardCvc.innerText = this.value;
    if (Number.isNaN(cvcNumber)) {
        formCvc.style.border = "1px solid red";
        formCvc.style.outline = "1px solid red";
        cvcError.innerText = "Wrong format, numbers only";
    } else if (formCvc.value === "") {
        formCvc.style.border = "1px solid red";
        formCvc.style.outline = "1px solid red";
        cvcError.innerText = "Can't be blank";
        cardCvc.innerText = "00"
    } else {
        formCvc.style.border = "1px solid hsl(249, 99%, 64%)";
        formCvc.style.outline = "1px solid hsl(278, 94%, 30%)";
        cvcError.innerText = "";
    }
})

submitButton.addEventListener("click", function() {
    if (!formName.checkValidity() || !formNumber.checkValidity() || !formMonth.checkValidity() || !formYear.checkValidity() || !formCvc.checkValidity()) {
        console.log("oops")
    } else {
        entryForm.style.display = "none";
        confirmationPage.style.display = "block";
    }
})

continueButton.addEventListener("click", function () {
    confirmationPage.style.display = "none";
    entryForm.style.display = "block";
    // inputs.forEach( function (input) {
    //     input.value === "";
    // })
})

