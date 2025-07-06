const names = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.addEventListener('click', ()=> {

    if(names.value === '' || email.value === '' || password.value === '') {
        alert('Please fill in all fields');
    }else if(password.value.length < 6){
        alert('Password should be minimum of 6 characteres');
    }else if(!email.value.includes('@')){
        alert('invalid email');
    }else{
        alert('Form submitted successfully');
    }
});