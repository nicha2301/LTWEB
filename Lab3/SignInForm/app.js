document.addEventListener('DOMContentLoaded', (e) => {
    const form = document.querySelector('form')
    const username = document.getElementById('username')
    const password = document.getElementById('password')

    form.addEventListener('submit', e => {
        let isValid = true
        if (!username.value.trim()) {
            isValid = false
            alert('Please enter your user name')
        }
        if (!password.value.trim()) {
            isValid = false
            alert('Please enter your password')
        }
        if(!isValid) {
            e.preventDefault()
        }
    })
})