/*
https://biblioeci.herokuapp.com
http://localhost:8080/
*/

var APIUsers = apiUsuarios;

apiLibros = (function(){

    function returnBook(idLibro){
        console.log('Funcion alquilar libro');
        var url = 'https://biblioeci.herokuapp.com/book/returnbook/'+String(idLibro);
        console.log(url)
        console.log(typeof(url));
        const xhttp = new XMLHttpRequest();
        xhttp.open("PUT", url, true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            console.log(this.status);
            alert('Libro devuelto, muchas gracias');
        }
    }

    function rentBook(idLibro){
        console.log('Funcion alquilar libro');
        var url = 'https://biblioeci.herokuapp.com/book/rentbook/'+String(idLibro)+'/3';
        console.log(url)
        console.log(typeof(url));
        const xhttp = new XMLHttpRequest();
        xhttp.open("PUT", url, true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            console.log(this.status);
            alert('Libro alquilado, cuidelo por favor!!');
        }
    }

    function availableBooks() {
        console.log('Funcion libros disponibles');
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'https://biblioeci.herokuapp.com/book/books', true);
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
                                    <button onclick="apiLibros.rentBook(${String(item.id)});location.href='traerLibros.html'" class="btn #8d6e63 brown lighten-1" id="libro-${item.id}" type="button" >Alquilar</button>
                                </td>
                            </tr>
                            `
                    }
                    else{
                        availability = 'No disponible'
                    } 
                    
                }
            }
        }
    }

    function returnBooks(){
        console.log('Funcion para retornar libros');
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'https://biblioeci.herokuapp.com/book/rentbooks', true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                let libros = JSON.parse(this.responseText);
                let res = document.querySelector('#res');
                res.innerHTML = '';
                for (let item of libros){
                    var availability = '';
                    if (!item.available){
                        availability = 'No disponible'
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
                                    <button onclick="apiLibros.returnBook(${String(item.id)});location.href='traerLibros.html'" class="btn #8d6e63 brown lighten-1" id="libro-${item.id}" type="button" >Devolver</button>
                                </td>
                            </tr>
                            `
                    }
                    else{
                        availability = 'Disponible'
                    } 
                    
                }
            }
        }
    }
    return {
        availableBooks: availableBooks,
        rentBook: rentBook,
        returnBooks: returnBooks,
        returnBook: returnBook
    };
})();


