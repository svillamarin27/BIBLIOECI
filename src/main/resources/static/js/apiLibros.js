/*
https://biblioeci.herokuapp.com
http://localhost:8080/
*/

var APIUsers = apiUsuarios;

apiLibros = (function(){

    window.onload = inicio;
    var tiempo = "";

    function inicio(){
        var tipoUsuario = localStorage.getItem('tipoUsuario');
        if(tipoUsuario == "false"){
            let res = document.querySelector('#menuInicio');
            res.innerHTML += `
                        <button onclick="location.href='index.html'" class="btn #8d6e63 brown lighten-1" >usuario</button>
                    `;
        }
        else{
            let res = document.querySelector('#menuInicio');
            res.innerHTML += `
                        <button onclick="location.href='index.html'" class="btn #8d6e63 brown lighten-1" >administrador</button>
                    `;
        }             
    }

    function returnBook(idLibro){
        console.log('Funcion alquilar libro');
        var idUser = localStorage.getItem('idUsuario');
        var url = 'http://localhost:8080/book/returnbook/'+String(idLibro)+'/'+String(idUser);
        const xhttp = new XMLHttpRequest();
        xhttp.open("PUT", url, true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.status == 202){
                alert('Libro devuelto, muchas gracias');
                location.reload();
            }
            else{
                alert('Oops, algo salio mal.');
                location.reload();
            }
        }
    }

    function rentBook(idLibro){
        console.log('Funcion alquilar libro');
        var idUser = localStorage.getItem('idUsuario');
        var url = 'http://localhost:8080/book/rentbook/'+String(idLibro)+'/' + String(idUser);
        const xhttp = new XMLHttpRequest();
        xhttp.open("PUT", url, true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.status == 202){
                alert('Libro alquilado, cuidelo por favor!!');
                location.reload();
            }
            else{
                alert('Ya tiene un libro alquilado o este libro no esta disponible')
                location.reload();
            }
        }
    }

    function availableBooks() {
        var tipoUsuario = localStorage.getItem("tipoUsuario");
        console.log('Funcion libros disponibles');
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://localhost:8080/book/books', true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                let libros = JSON.parse(this.responseText);
                let res = document.querySelector('#listaLibros');
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
                                    <button onclick="apiLibros.rentBook(${String(item.id)})" class="btn #8d6e63 brown lighten-1" id="libro-${item.id}" type="button" >Alquilar</button>
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
        var idUser = localStorage.getItem('idUsuario');
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://localhost:8080/book/rentbooks/'+String(idUser), true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                let libros = JSON.parse(this.responseText);
                let res = document.querySelector('#listaLibros');
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
                                <td>
                                    <a onclick="apiLibros.daysLoan()" href="#modal1" class="btn modal-trigger brown lighten-1" >Dias prestamo</a>
                                    
                                </td>
                                <td>
                                    <button onclick="apiLibros.returnBook(${String(item.id)})" class="btn #8d6e63 brown lighten-1" id="libro-${item.id}" type="button" >Devolver</button>
                                </td>
                            </tr>
                            `;
                    }
                    else{
                        availability = 'Disponible'
                    } 
                    
                }
            }
        }
    }

    function daysLoan(){
        var idUser = localStorage.getItem('idUsuario');
        var answer = "";
        const xhttp = new XMLHttpRequest();
        let resModals = document.querySelector('#dias')
        xhttp.open('GET', 'http://localhost:8080/user/calculateloan/'+String(idUser), true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            resModals.innerHTML = '';
            answer = String(this.responseText);
            tiempo = answer;
            resModals.innerHTML +=  `
                            <h4>Dias de prestamo</h4>
                            <p> Vas ${tiempo} segundos de prestamo. Te recomendamos terminar el uso del libro unos dias antes para 
                            evitar contratiempos.
                            </p>
                            `;
        }
    }

    return {
        inicio: inicio,
        daysLoan: daysLoan,
        availableBooks: availableBooks,
        rentBook: rentBook,
        returnBooks: returnBooks,
        returnBook: returnBook
        
    };
})();


