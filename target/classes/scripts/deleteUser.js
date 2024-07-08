const urlAPI = '/api'

function deleteUser() {
    fetch(urlAPI + "/" + document.getElementById('idDelete').value, {
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