/*
https://biblioeci.herokuapp.com/user/users
http://localhost:8080/user/users
*/

document.querySelector('#I-Sign-in').addEventListener('click', validateUsers)

function validateUsers() {
    console.log("dentro del programa")

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'http://localhost:8080/user/users', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let usuarios = JSON.parse(this.responseText);
            console.log(usuarios)
        }
    }
}