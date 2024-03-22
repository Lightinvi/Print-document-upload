document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('password-submit').addEventListener('click', function(){
        let ps = document.getElementById('password').value
        if (encrypt(ps) == '4Iw3ly7wIDr4mM3OU2V+Zw=='){
            document.getElementById('login').style.display = 'none'
            document.body.style.display = 'inherit'
            document.getElementById('upload-container').style.display = 'inherit'
        }
    })
})