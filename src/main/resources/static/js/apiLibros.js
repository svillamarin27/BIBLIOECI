/*
https://biblioeci.herokuapp.com/
http://localhost:8080/
*/

var APIUsers = apiUsuarios;

apiLibros = (function(){

    window.onload = inicio;

    function inicio(){
        var tipoUsuario = localStorage.getItem('tipoUsuario');
        localStorage.setItem('paginaLibro',0);
        if(tipoUsuario == "false"){
            let res = document.querySelector('#menuInicio');
            res.innerHTML += `
                        <button class="btn #8d6e63 brown lighten-1" >usuario</button>
                        <button onclick="location.href='index.html'" class="right-align btn #8d6e63 brown lighten-1" >Cerrar sesion</button>
                    `;
        }
        else{
            let res = document.querySelector('#menuInicio');
            res.innerHTML += `
                        <button class="btn #8d6e63 brown lighten-1" >administrador</button>
                        <button onclick="location.href='index.html'" class="btn #8d6e63 brown lighten-1" >Cerrar sesion</button>
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
                var url2 = 'http://localhost:8080/user/stoploan/'+String(idUser);
                const xhttp2 = new XMLHttpRequest();
                xhttp2.open("PUT", url2, true);
                xhttp2.send();
                xhttp2.onreadystatechange = function(){}
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
                var url2 = 'http://localhost:8080/user/startloan/'+String(idUser);
                const xhttp2 = new XMLHttpRequest();
                xhttp2.open("PUT", url2, true);
                xhttp2.send();
                xhttp2.onreadystatechange = function(){}
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
                let btnPag = document.querySelector('#botonPag');
                btnPag.innerHTML = '';
                var isPag = parseInt(localStorage.getItem('paginaLibro'), 10);
                var start = 10*isPag
                var end = start+10;
                for (var x = start;x < end;x++){
                    var availability = '';
                    if (libros[x].available){
                        availability = 'Disponible'
                        res.innerHTML += `
                            <tr>
                                <td>${libros[x].names}</td>
                                <td>${libros[x].author}</td>-
                                <td>${libros[x].publication}</td>
                                <td>${libros[x].category}</td>
                                <td>${libros[x].editorial}</td>
                                <td>${libros[x].languages}</td>
                                <td>${availability}</td>
                                <td>${libros[x].resume}</td>
                                <td>
                                    <button onclick="apiLibros.rentBook(${String(libros[x].id)})" class="btn #8d6e63 brown lighten-1" id="libro-${libros[x].id}" type="button" >Alquilar</button>
                                </td>
                            </tr>
                            `
                    }
                    else{
                        availability = 'No disponible'
                    }
                }
                if (isPag == 0){
                    btnPag.innerHTML += `
                            <button onclick="apiLibros.btnNext();apiLibros.availableBooks()" class="btn #8d6e63 brown lighten-1" type="button" >Siguiente</button>
                    `
                }
                else if(isPag == 49){
                    btnPag.innerHTML += `
                            <button onclick="apiLibros.btnPrev();apiLibros.availableBooks()" class="btn #8d6e63 brown lighten-1" type="button" >Anterior</button>
                    `
                }
                else{
                    btnPag.innerHTML += `
                        <button onclick="apiLibros.btnPrev();apiLibros.availableBooks()" class="btn #8d6e63 brown lighten-1" type="button" >Anterior</button>
                        <p></p>
                        <button onclick="apiLibros.btnNext();apiLibros.availableBooks()" class="btn #8d6e63 brown lighten-1" type="button" >Siguiente</button>
                            
                    `
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
            minutos = parseInt(answer, 10);
            minutos = minutos / 60;
            minutos = Math.trunc(minutos);
            if(minutos <= 2){
                resModals.innerHTML +=  `
                            <h4>Dias de prestamo</h4>
                            <p> Vas ${minutos} minutos de prestamo. Te recomendamos terminar el uso del libro unos dias antes para 
                            evitar contratiempos.
                            </p>
                            `;
            }
            else{
                resModals.innerHTML +=  `
                            <h4>Dias de prestamo</h4>
                            <p> Vas ${minutos-2} minutos de retraso. Devuelva el libro por favor.
                            </p>
                            <h4>Multa</h4>
                            <p> Por ${minutos-2} minutos de retraso acumula una multa de $${(minutos-2)*100} pesos.
                            Le recomendamos ponerse al día!
                            </p>
                            `;
            }
            
        }
    }

    function btnNext(){
        var pag = parseInt(localStorage.getItem('paginaLibro'),10);
        pag += 1;
        localStorage.setItem('paginaLibro',pag);
    }

    function btnPrev(){
        var pag = parseInt(localStorage.getItem('paginaLibro'),10);
        pag -= 1;
        localStorage.setItem('paginaLibro',pag);
    }

    return {
        inicio: inicio,
        btnNext: btnNext,
        btnPrev: btnPrev,
        daysLoan: daysLoan,
        availableBooks: availableBooks,
        rentBook: rentBook,
        returnBooks: returnBooks,
        returnBook: returnBook
        
    };
})();


