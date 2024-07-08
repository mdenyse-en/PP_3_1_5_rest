const userTable = document.getElementById('infoTableBody')

const fillUserInfo = (user) => {
    let resultInfo = ''

        resultInfo +=`
                <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.lastname}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${user.roles.map(role => role.name.substring(5).concat(" ")).toString().replaceAll(",", "")}</td>
                </tr>`

    userTable.innerHTML = resultInfo

    return user
}