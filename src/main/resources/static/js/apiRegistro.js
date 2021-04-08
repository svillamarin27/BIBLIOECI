/*
https://biblioeci.herokuapp.com/
http://localhost:8080/
*/

apiRegistro = (function(){

    function createUser(){
        var name = document.getElementById('names').value;
        var age = document.getElementById('ages').value;
        var celphone = document.getElementById('celphone').value;
        var phone = document.getElementById('phone').value;
        var adress = document.getElementById('adress').value;
        var email = document.getElementById('email').value;
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var data = {};
        data.names = name;
        data.ages = age;
        data.celphone = celphone;
        data.phone = phone;
        data.adress = adress;
        data.email = email;
        data.username = username;
        data.passwords = password;
        data.admins = false;
        data.bookrent = false;
        var json = JSON.stringify(data);
        console.log(data);
        console.log(json);
        const xhttp = new XMLHttpRequest();
        xhttp.open('POST', 'https://biblioeci.herokuapp.com/user/addusers', true);
        xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhttp.send(data);
        xhttp.onreadystatechange = function(){
            console.log(this.status);
        }
        
    }

    return{
        createUser: createUser
    };
})();