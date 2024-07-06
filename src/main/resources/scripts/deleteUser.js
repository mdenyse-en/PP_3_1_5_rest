function deleteUser() {
    fetch("http://127.0.0.1:8080/api/" + document.getElementById('idDelete').value, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => console.log(response))
        .then(() => {
            mainLoadPage()
        })
        .catch(error => console.log(error))

    bootstrap.Modal.getInstance(document.getElementById('modalDelete')).hide()
}