const login = document.getElementsByClassName('input')[0];


login.addEventListener('keyup', function(){
    const loginId = document.getElementsByClassName('id')[0].value;
    const loginPass = document.getElementsByClassName('password')[0].value;
    const loginButton = document.getElementsByClassName('button')[0];

    if(loginId.length > 0 && loginPass.length > 0){
        loginButton.style.backgroundColor = 'blue';
        return;
    }else {
        loginButton.style.backgroundColor = '#B2DFFC';
        return;
    }
});
