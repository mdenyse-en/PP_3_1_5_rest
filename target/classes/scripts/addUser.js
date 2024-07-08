const urlAdd = '/api/add'

function addUser() {
    let username = document.getElementById("usernameAdd").value
    let lastname = document.getElementById("lastnameAdd").value
    let password = document.getElementById("passwordAdd").value
    let age = document.getElementById("ageAdd").value
    let email = document.getElementById("emailAdd").value
    let roles = getArrayFromSelect(document.getElementById("rolesAdd"))

    fetch(urlAdd, {method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            lastname: lastname,
            password: password,
            age: age,
            email: email,
            roles: roles
        })
    }).then(() => {
        document.getElementById('usersTableLink').click()
        mainLoadPage()
        document.getElementById('addUserForm').reset()
    }).catch(error => console.log("Error caught: " + error))
}