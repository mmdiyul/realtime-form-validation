function nameValidation(){
    let nama = document.getElementById('nama').value
    if (nama == '') {
        document.getElementById('helpNama').setAttribute('class', 'fa fa-times text-danger')
        document.getElementById('helpNama').innerHTML = ' Masukkan nama lengkap'
    } else {
        document.getElementById('helpNama').innerHTML = ' Nama telah valid'
        document.getElementById('helpNama').setAttribute('class', 'fa fa-check text-success')
    }
}

function usernameValidation() {
    let username = document.getElementById('username').value
    if (username.length < 5) {
        document.getElementById('helpUsername').setAttribute('class', 'fa fa-times text-danger')
        document.getElementById('helpUsername').innerHTML = ' Masukkan nama pengguna minimal 5 karakter'
    } else {
        document.getElementById('helpUsername').innerHTML = ' Nama pengguna telah valid'
        document.getElementById('helpUsername').setAttribute('class', 'fa fa-check text-success')
    }
}

function emailValidation() {
    let email = document.getElementById('email').value
    // regex for if-else condition from https://stackoverflow.com/a/4964763
    if(/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
        document.getElementById('helpEmail').innerHTML = ' Email telah valid'
        document.getElementById('helpEmail').setAttribute('class', 'fa fa-check text-success')      
    } else {
        document.getElementById('helpEmail').innerHTML = ' Masukkan email yang valid'
        document.getElementById('helpEmail').setAttribute('class', 'fa fa-times text-danger')
    }
}

function passwordValidation() {
    let password = document.getElementById('password').value
    if (password.length < 8) {
        document.getElementById('helpPassword').setAttribute('class', 'fa fa-times text-danger')
        document.getElementById('helpPassword').innerHTML = ' Kata sandi minimal 8 karakter'
    } else {
        document.getElementById('helpPassword').innerHTML = ' Kata sandi telah memenuhi minimal 8 karakter'
        document.getElementById('helpPassword').setAttribute('class', 'fa fa-check text-success')
    }
}