document.getElementById('login-submit').addEventListener('click', function(){
    let emailField = document.getElementById('user-email');
     let userEmail = emailField.value;

     let passwordField = document.getElementById('user-password');
     let userPassword = passwordField.value;

     if(userEmail=='ritachowdhury@gmail.com' && userPassword=='secret'){
         window.location.href = 'banking.html';
     }
     else{
         document.write('your email or password is incorrect');
         
     }
});


















