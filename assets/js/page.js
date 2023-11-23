const formParent = document.getElementById('tilmeld');
const myName = document.getElementById('name');
const mySurName = document.getElementById('surName');
const myAddress = document.getElementById('address');
const myZipCode = document.getElementById('zipCode');
const myEmail = document.getElementById('email');

const myButton = document.getElementById('submitButton');

const nameBox = document.getElementById('nameBox');
const surNameBox = document.getElementById('surNameBox');
const addressBox = document.getElementById('addressBox');
const zipCodeBox = document.getElementById('zipCodeBox');
const emailBox = document.getElementById('emailBox');




myButton.addEventListener('click', (event)=> {
    event.preventDefault();

    let myTrimmedName = myName.value.trim();
    let myTrimmedSurname = mySurName.value.trim();
    let myTrimmedAddress = myAddress.value.trim();
    

    if(myTrimmedName.length > 1 && myTrimmedSurname.length > 1 && myTrimmedAddress.length > 4 && validateZipCode(myZipCode.value) && validateEmail(myEmail.value)) {

        console.log('Formen er ufyldt korrekt!');

        formParent.innerHTML = '';

        let myResponseElement = document.createElement('h2');
        myResponseElement.innerText = 'Tak for Tilmeldingen!'
        formParent.appendChild(myResponseElement);

    }else{

        console.log('Formen er ikke ufyldt korrekt..');

        if (myTrimmedName.length <= 1){
            console.log('Navnet er ikke udfyldt korrekt..');
            myName.classList.toggle('errorMarking');

            errorResponse(nameBox, 'Dit navn skal mindst have 2 tegn');
        }

        if (myTrimmedSurname.length <= 1){
            console.log('Efternavnet er ikke udfyldt korrekt..');
            mySurName.classList.toggle('errorMarking');
            errorResponse(surNameBox, 'Dit efternavn skal mindst have 2 tegn');
        }

        if (myTrimmedAddress.length <= 4){
            console.log('Adressen er ikke udfyldt korrekt..');
            myAddress.classList.toggle('errorMarking');
            errorResponse(addressBox, 'Din adresse skal mindst have 5 tegn');
        }

        if (validateZipCode(myZipCode.value)){
        } else{

            console.log('Postnumemret er ikke udfyldt korrekt..');
            myZipCode.classList.toggle('errorMarking');
            errorResponse(zipCodeBox, 'Dit postnummer skal have 4 tal');
        }

        if (validateEmail(myEmail.value)){
        } else{

            console.log('Emailen er ikke udfyldt korrekt..');
            myEmail.classList.toggle('errorMarking');
            errorResponse(emailBox, 'Din mail skal udfyldes korrekt');
        }
    }
});

function validateZipCode(code) {

    const zipCodeRegex = /^(?:[1-24-9]\d{3}|3[0-8]\d{2})$/;
    let isValid = zipCodeRegex.test(code);

    return isValid;
    
}

function validateEmail(email){

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = emailRegex.test(email);

    return isValid;
}

function errorResponse(box, errorMessage){
                //Lav en fejl tekst
                let responseText = document.createElement('p');
                box.appendChild(responseText);
                responseText.classList.toggle('errorText');
                responseText.innerText = errorMessage;
}