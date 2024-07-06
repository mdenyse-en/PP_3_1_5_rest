const usersTable = document.getElementById('listOfUsers')

function fillUsersTable(users){

    let resultList = ''

    users.forEach(user => {
        resultList +=`
                <tr>
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.lastname}</td>
                    <td>${user.age}</td>
                    <td>${user.email}</td>
                    <td>${user.roles.map(role => role.name.substring(5).concat(" ")).toString().replaceAll(",", "")}</td>
                    <td><button class="btn btn-primary" onclick="fillModal(${user.id})" data-bs-toggle="modal"  data-bs-target="#modalEdit">
                    Edit
                    </button></td>
                    <td><button class="btn btn-danger" onclick="fillModal(${user.id})" data-bs-toggle="modal" data-bs-target="#modalDelete">Delete</button></td>
                </tr>`
    })

    usersTable.innerHTML = resultList
}

function fillUsersList(){
    fetch(urlAllUsers)
        .then( response => response.json())
        .then( data => fillUsersTable(data))
        .catch( error => console.log(error))
}
