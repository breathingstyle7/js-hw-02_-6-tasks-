
const passwordRequest = prompt("Введіть будь ласка свій пароль для авторизації")

const ADMIN_PASSWORD = 'jqueryismyjam'
let authMessage = ""

if (passwordRequest === null) {
    alert("Операцію скасовано!")
} else if (passwordRequest === ADMIN_PASSWORD) {
    alert("Ласкаво просимо!")
} else {
    authMessage = "Доступ заборонено, невірний пароль!"
}

alert(authMessage)