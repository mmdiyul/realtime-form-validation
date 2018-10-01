function nameValidation() {
    var nama = document.getElementById('nama').value
    if (nama == '') {
        document.getElementById('helpNama').setAttribute('class', 'fa fa-times text-danger')
    } else {
        document.getElementById('helpNama').setAttribute('class', 'fa fa-check text-success')
    }
}

function usernameValidation() {
    var username = document.getElementById('username').value
    if (username == '' || username.length < 5) {
        document.getElementById('helpUsername').setAttribute('class', 'fa fa-times text-danger')
    } else {
        document.getElementById('helpUsername').setAttribute('class', 'fa fa-check text-success')
    }
}