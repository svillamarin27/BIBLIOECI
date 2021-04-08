/*
https://biblioeci.herokuapp.com/user/users
http://localhost:8080/user/users
*/

apiUsuarios = (function(){

    userLoggedIn = "";

    function validateUsers() {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://localhost:8080/user/users', true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var ingresoCorrecto = false;
                let usuarios = JSON.parse(this.responseText);
                var usuario = document.getElementById('username').value;
                var contraseña = document.getElementById('contraseña').value;
                if (usuario === "" || contraseña === "") {
                    alert("Todos los campos son requeridos.");
                }
                for(let item of usuarios){
                    console.log(item.password);
                    if(item.password == contraseña && item.name == usuario){
                        console.log('Usuario correcto')
                        ingresoCorrecto = true;
                        break;
                    }
                }
                if (ingresoCorrecto){
                    alert("Bienvenido. Usted inicio sesion como: "+ usuario);
                    userLoggedIn = usuario
                    window.location.href = "traerLibros.html";
                }
                else{
                    alert("Usuario y/o contraseña incorrectos. ")
                }
            }
        }
    }

    function getUserLoggedIn(){
        return userLoggedIn;
    }

    return {
        validateUsers: validateUsers,
        getUserLoggedIn: getUserLoggedIn
    };
})();