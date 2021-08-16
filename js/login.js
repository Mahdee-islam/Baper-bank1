document.getElementById("login-submit").addEventListener('click', function(){
    // console.log('button clicked')

    //get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail)

    // get user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword)

    //checking valid user
    if(userEmail == 'sontan@bap.com' && userPassword == 'secret'){
        window.location.href = "http://127.0.0.1:5500/banking.html"
    }
    else{
        alert('tui amar pola na !!!!')
    }

})