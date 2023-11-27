const expressionForm = document.querySelector("#expressionForm");
const expressionType = document.querySelector("#expressionType");
const userInput = document.querySelector("#userInput");
const message = document.querySelector("#message");


expressionForm.addEventListener('submit', expressionValidationCheck)

function expressionValidationCheck(event) {
    event.preventDefault();
    let inputVal = userInput.value;
    let expressType = expressionType.value;
    if (expressType === '') {
        message.style.color = 'red';
        message.innerHTML = "Pleae Select Expression Type";
        return;
    }

    let regex;


    switch (expressType) {
        case 'email':
            regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            break;
        case 'phone':
            regex = /^(\+)?(88)?01[0-9]{9}$/;
            break;
        case 'postcode':
            regex = /^\d{4}$/;
            break;

        default:
            console.log('Expression Type Not Found');
            break;
    }

    const isValid = regex.test(inputVal);

    if (isValid) {
        message.style.color = 'green'
        message.innerHTML = 'Valid'
    } else {
        message.style.color = 'red';
        message.innerHTML = 'invalid'
    }
}