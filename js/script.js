var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;
    if(name.length == 0) {
        nameError.innerHTML = "Nome é obrigatório";
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;
    if(phone.length == 0) {
        phoneError.innerHTML = "Contacto é obrigatório!";
        return false;
    }
    if(phone.length !== 9) {
        phoneError.innerHTML = "Coloque um contacto correto!";
        return false;
    }

    if(!phone.match(/^(91|92|93|96)\d{7}$/)) {
        phoneError.innerHTML = "Coloque um contacto correto!";
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;
    if(email.length == 0) {
        emailError.innerHTML = "E-mail é obrigatório!";
        return false;
    }


    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        emailError.innerHTML = "Coloque um email correto!";
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = "Mais " + left + " caracteres necessários!";
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

