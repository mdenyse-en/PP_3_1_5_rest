

function editUser() {
    fetch(urlAdd, {method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: document.getElementById('idEdit').value,
            username: document.getElementById('usernameEdit').value,
            lastname: document.getElementById('lastnameEdit').value,
            password: document.getElementById('passwordEdit').value,
            age: document.getElementById('ageEdit').value,
            email: document.getElementById('emailEdit').value,
            roles: getArrayFromSelect(document.getElementById('rolesEdit'))
        })
    }).then(() => {
        mainLoadPage()
        bootstrap.Modal.getInstance(document.getElementById('modalEdit')).hide()

    }).catch(error => {console.log(error)})
}