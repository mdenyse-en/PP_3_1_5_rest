
document.addEventListener('DOMContentLoaded', async function () {
    fetch('/api/current')
        .then(response => response.json())
        .then(user => fillUserInfo(user))
        .then(user => fillCurrentUserInfo(user))
        .catch(error => console.log(error))
})
