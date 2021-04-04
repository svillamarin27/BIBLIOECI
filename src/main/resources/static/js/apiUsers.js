var apiUsers = (function () {
    function validateUsers() {
        var username = document.getElementById("user").value;
        var password = document.getElementById("pass").value;
        if (username === "" || password === "") {
            alert("Todos los campos son requeridos.");
        } else {
            const options = {
                method: 'GET',
                url: "http://localhost:8080/user/checkusers" + username
            };
            axios.request(options).then(function (response) {
                console.log(response);
                if (response.data) {
                    alert("Verdadero");
                }
                else {
                    alert("Falso");
                }
            }).catch(function (error) {
                console.error(error);
            });

        }
    }
    return {
        validateUsers : validateUsers
    }
})();