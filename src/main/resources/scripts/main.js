const urlCurrentUser = '/api/current'
const urlAllUsers = '/api/users'

function mainLoadPage(){

    fetch(urlCurrentUser)
        .then(response => response.json())
        .then(user => fillUserInfo(user))
        .then(user => fillCurrentUserInfo(user))
        .catch(error => console.log(error))

    fillUsersList()
}

mainLoadPage()

function getArrayFromSelect(selectElem) {
    return Array.from(selectElem.selectedOptions).map(op => {return {"id": op.value}})
}