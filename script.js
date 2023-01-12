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

formName.addEventListener("input", function() {
        cardName.innerText = this.value;
})
formNumber.addEventListener("input", function() {
    cardNumber.innerText = this.value;
})
formMonth.addEventListener("input", function() {
    cardMonth.innerText = this.value;
})
formYear.addEventListener("input", function() {
    cardYear.innerText = this.value;
})
formCvc.addEventListener("input", function() {
    cardCvc.innerText = this.value;
})

submitButton.addEventListener("click", function() {
    entryForm.style.display = "none";
    confirmationPage.style.display = "block";
})

continueButton.addEventListener("click", function () {
    confirmationPage.style.display = "none";
    entryForm.style.display = "block";
    inputs.forEach(input => input.innerText = "");
})
