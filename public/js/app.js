
const contact = document.querySelector(".contact");

let name1 = document.getElementById('name1');
let email = document.getElementById('email');
let emailSubject = document.getElementById('emailSubject');
let message1 = document.getElementById('message1');


contact.addEventListener('submit',(e) => {
    e.preventDefault();

    let formData = {
        name: name1.value,
        email: email.value,
        emailSubject: emailSubject.value,
        message1: message1.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email Sent');
            name1.value = '';
            email.value = '';
            emailSubject.value = '';
            message1.value = '';

        }else {
            alert ("something went wrong");
        }
        

    }
    xhr.send(JSON.stringify(formData));
} );