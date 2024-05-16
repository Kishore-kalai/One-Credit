let data = {mail : '',password :''};
let button = false;

document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();
  });

document.querySelector('input').addEventListener('keydown', function(event) {
    if(button){
       document.querySelector('button').innerText = 'SIGN IN';
    }
});

document.querySelector('button').addEventListener('click',() =>{
    collectData();
});



function collectData(){
    let mailElement = document.querySelector('.mail');
    const mail = mailElement.value;
    let passwordElement = document.querySelector('.password');
    const password = passwordElement.value;
    if(mail === ''){
        document.querySelector('.mail').placeholder = 'Enter your mail';
        
        return false;
    }
    if(password === ''){
        document.querySelector('.password').placeholder = 'Enter your password';
        document.querySelector('.password').classList.remove('password-not');   

        return false;
    }
    data = {
        mail: mail,
        password: password
    };
    authenticate();
    return true;
}

function getData(){
    console.log(data.mail, data.password);
}

function authenticate(){
    let mail = data.mail;
    let password = data.password;

    const mail_json = 'kishore.ec21@bitsathy.ac.in';
    const password_json = 'Test';
    const admin_json = 'admin@bitsathy.ac.in';
    const adminpass_json = 'Admin';
    if(mail ===  mail_json && password === password_json ){
        location.href="./main.html"
        return true;
    }
    else if(mail ===  admin_json && password === adminpass_json){
        location.href="./Admin.html"
        return true;
    }
    
    if(mail !== mail_json || password !== password_json){
        console.log(mail);  
        document.querySelector('.password').value = '';
        document.querySelector('.password').placeholder = 'Invalid username or password';
        document.querySelector('.password').classList.add('password-not');
    }
    else{
        document.querySelector('input').innerHTML.value = '';
        document.querySelector('button').innerText = 'USER NOT FOUND';
        button = true;
    }
}

