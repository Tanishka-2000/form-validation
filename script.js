const mail = document.querySelector('input[id="mail"]');
mail.addEventListener('input', validate);

const zipCode = document.querySelector('input[id="zip-code"]');
zipCode.addEventListener('input', validate);

const country = document.querySelector('input[id="country"]');
country.addEventListener('input', validate);

const password = document.querySelector('input[id="password"]');
password.addEventListener('input', validatePassword);

const confirmPassword = document.querySelector('input[id="confirm-password"]');
confirmPassword.addEventListener('input', checkPassword);

const submitButton = document.querySelector('button');
submitButton.addEventListener('click', submitForm);

function validate(e){
    if(e.target.checkValidity()) return true;
    e.target.reportValidity();
}

function validatePassword(e){
    let errorStr = '';
    if(!e.target.value.match(/[A-Z]/)) errorStr += 'Must contain uppercase letter\n';
    if(!e.target.value.match(/[0-9]/)) errorStr += 'Must contain number\n';
    if(!e.target.value.match(/[a-z]/)) errorStr += 'Must contain lowercase letter ';
    if(e.target.value.length < 8) errorStr += 'Must contain atleast 8 characters ';

    e.target.setCustomValidity(errorStr);
    if(e.target.checkValidity()) return true
    e.target.reportValidity();
}

function checkPassword(){
    if(password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Password does not match');
        confirmPassword.reportValidity();
    }else confirmPassword.setCustomValidity('');
}

function submitForm(e){
    let form = e.target.parentElement;
    if(form.checkValidity()){
        form.style.display = 'none';
        document.querySelector('.message').style.display = 'block';
    }else{
        form.reportValidity();
    }
}
