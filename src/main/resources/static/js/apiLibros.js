/*
https://biblioeci.herokuapp.com/book/books
http://localhost:8080/book/books
*/

const APIUsers = apiUsuarios;

<<<<<<< HEAD
apiLibros = (function(){

    function rentBook(idLibro){
        console.log('Funcion alquilar libro');
        var url = 'http://localhost:8080/book/rentbook/';
        url += idLibro;
        console.log(url)
        console.log(typeof(url));
        const xhttp = new XMLHttpRequest();
        xhttp.open("PUT", url, true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            console.log(this.status);
        }
    }

    function availableBooks() {
        console.log('Funcion libros disponibles');
        console.log(APIUsers.getUserLoggedIn());
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://localhost:8080/book/books', true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                let libros = JSON.parse(this.responseText);
                let res = document.querySelector('#res');
                res.innerHTML = '';
                for (let item of libros){
                    var availability = '';
                    if (item.available){
                        availability = 'Disponible'
                    }
                    else{
                        availability = 'No disponible'
                    } 
                    console.log(item);
                    res.innerHTML += `
                        <tr>
                            <td>${item.names}</td>
                            <td>${item.author}</td>-
                            <td>${item.publication}</td>
                            <td>${item.category}</td>
                            <td>${item.editorial}</td>
                            <td>${item.languages}</td>
                            <td>${availability}</td>
                            <td>${item.resume}</td>
                            <td>
                                <button onclick="apiLibros.rentBook(${String(item.id)})" class="btn #8d6e63 brown lighten-1" id="libro-${item.id}" type="button" >Alquilar</button>
                            </td>
                        </tr>
                        `
                }
            }
        }
    }
    return {
        availableBooks: availableBooks,
        rentBook: rentBook
    };
})();


=======
function availableBooks() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://localhost:8080/book/books', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let libros = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';
            
            for (let item of libros){
                console.log(item);
                res.innerHTML += `
                    <tr>
                        <td>${item.names}</td>
                        <td>${item.author}</td>
                        <td>${item.publication}</td>
                        <td>${item.category}</td>
                        <td>${item.editorial}</td>
                        <td>${item.languages}</td>
                    </tr>
                    `
            }
        }
    }

}
>>>>>>> 33424fb7372c6de0a2e51dfdf1e9aed791162583
