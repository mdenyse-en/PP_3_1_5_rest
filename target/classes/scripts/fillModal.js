function fillModal(id) {
    fetch("/api/" + id)
        .then(response => response.json())
        .then(user => {
            document.getElementById('idEdit').value = user.id
            document.getElementById('usernameEdit').value = user.username
            document.getElementById('lastnameEdit').value = user.lastname
            document.getElementById('emailEdit').value = user.email
            document.getElementById('passwordEdit').value = user.password
            document.getElementById('ageEdit').value = user.age
            let roles1 = ""

            fetch("/api/roles")
                .then(response => response.json())
                .then(allRoles => {
                    allRoles.forEach(role => {
                        let hasRole = false
                        user.roles.forEach(userRole => {
                            if (userRole.id === role.id) {
                                hasRole = true
                            }
                        })
                        roles1 += `<option value=${role.id} ${hasRole? "selected": ""}>${role.name.replace("ROLE_", "")}</option>`
                    })
                    document.getElementById('rolesEdit').innerHTML = roles1
                })
                .catch(error => console.log("Has error: " + error))

            document.getElementById('idDelete').value = user.id
            document.getElementById('usernameDelete').value = user.username
            document.getElementById('lastnameDelete').value = user.lastname
            document.getElementById('emailDelete').value = user.email
            document.getElementById('ageDelete').value = user.age

            let roles = ""
            user.roles.forEach(role => {
                roles += `<option value=${role.id}>${role.name.replace("ROLE_", "")}</option>`
            })

            document.getElementById('rolesDelete').innerHTML = roles
        })
}