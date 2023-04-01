const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const dump = new FormData(form);
    
    fetch('http://127.0.0.1:5500', {
        method: 'GET',
        body: dump,
    })
    .then(res => res.json())
    .then(data => console.log(data));
});