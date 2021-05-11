/*
https://biblioeci.herokuapp.com/
http://localhost:8080/
*/

apiRegistro = (function(){

    function createUser(){
        var formatJSON = ["name","ages","celphone","phone","adress","email","username","password"];
        var arrayData = [];
        arrayData.push(document.getElementById('names').value);
        arrayData.push(document.getElementById('ages').value);
        arrayData.push(document.getElementById('celphone').value);
        arrayData.push(document.getElementById('phone').value);
        arrayData.push(document.getElementById('adress').value);
        arrayData.push(document.getElementById('email').value);
        arrayData.push(document.getElementById('username').value);
        arrayData.push(document.getElementById('contraseña').value);
        var data = '{';
        var userInvalid = false;
        for(var i = 0; i < arrayData.length; i++){
            if(arrayData[i] == ""){
                userInvalid = true;
                break;
            }
            else{
                data += '"'+formatJSON[i]+'":';
                data += '"'+arrayData[i]+'"';
                if( i != arrayData.length-1){
                    data += ","
                }
            }
        }
        data += "}";
        console.log(data);
        if(!userInvalid){
            var json = JSON.parse(data);
            const xhttp = new XMLHttpRequest();
            xhttp.open('POST', 'http://localhost:8080/user/addusers', true);
            xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
            xhttp.send(data);
            xhttp.onreadystatechange = function(){
                if(this.status = 200 && !userInvalid){
                    alert("Usuario creado. Gracias por registrarse.");
                    window.location.href = "index.html";
                }
                else{
                    alert("Usuario no creado. Revise de nuevo el formulario.");
                }
            }
        }
        else{
            alert("Usuario no creado. Revise de nuevo el formulario.");
        }
    }

    return{
        createUser: createUser
    };
})();