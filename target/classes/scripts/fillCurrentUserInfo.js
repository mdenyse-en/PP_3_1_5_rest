const head = document.getElementById('userInfo')

const fillCurrentUserInfo = (user) => {
    let aboutUser = ''

    aboutUser += `
    <b>${user.email}</b>
    with roles:
    ${user.roles.map(role => role.name.substring(5).concat(" ")).toString().replaceAll(",", "")}
`
    head.innerHTML = aboutUser

    return user
}