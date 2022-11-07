// Insert your code here
const FRONTEND_URL = 'https://weatherapp-backend-r7is.vercel.app/';

function signUp(){
    const userName = document.querySelector('#registerName').value;
    const userEmail = document.querySelector('#registerEmail').value;
    const userPassword  = document.querySelector('#registerPassword').value;

    fetch(`${FRONTEND_URL}user/signup`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ userName,userEmail,userPassword }),
	})
    .then(response => response.json())
    .then(data=>{
        console.log(data);

        if(data.result){
            window.location.assign('index.html');
        }

    })

}


function signIn(){
    const userEmail = document.querySelector('#connectionEmail').value;
    const userPassword  = document.querySelector('#connectionPassword').value;

    fetch(`${FRONTEND_URL}user/signin`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ userEmail,userPassword }),
	})
    .then(response => response.json())
    .then(data=>{
        console.log(data);

        if(data.result){
            window.location.assign('index.html');
        }

    })

}

document.querySelector('#register').addEventListener('click',()=>{
    signUp();
})

document.querySelector('#connection').addEventListener('click',()=>{
    signIn();
})