const id = document.getElementById('id');
const password = document.getElementById('password');
const fname = document.getElementById('name');
const bday = document.getElementById('birthday');
const form = document.getElementById('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     fetch('apikey', {
//         method: 'POST',
//         body: JSON.stringify({
//             id: id,
//             password: password,
//             fname: fname,
//             bday: bday,
//         })
//     })
//         .then(response => response.json())
//         .then(res => console.log(res));
// });