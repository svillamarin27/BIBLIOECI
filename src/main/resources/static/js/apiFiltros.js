apiFiltros = (function(){

    var libros = null;

    function nameBook(){
        let res = document.querySelector('#menuInicioFiltros');
        res.innerHTML = ``
        res.innerHTML += `
                    <button onclick="location.href='traerLibros.html'" class="btn #8d6e63 brown lighten-1" >Menu principal</button>
                    <a href="#modal2" class="btn modal-trigger brown lighten-1" >Filtrar busqueda</a>
                    <form>
                        <div class="input-field">
                            <label for="nombreLibro">Nombre libro</label><br>
                            <input id="nombreLibro" type="text" class="validate">
                        </div>
                        <div class="col s6 offset-s5">
                            <button onclick="apiFiltros.consultarPorNombre()" class="btn #8d6e63 brown lighten-1" type="button">Buscar por nombre</button>							                            
                        </div>
                    </form>
                `;
    }
    function nameAuthor(){
        let res = document.querySelector('#menuInicioFiltros');
        res.innerHTML = ``
        res.innerHTML += `
                    <button onclick="location.href='traerLibros.html'" class="btn #8d6e63 brown lighten-1" >Menu principal</button>
                    <a href="#modal2" class="btn modal-trigger brown lighten-1" >Filtrar busqueda</a>
                    <form>
                        <div class="input-field">
                            <label for="nombreAutor">Nombre autor</label><br>
                            <input id="nombreAutor" type="text" class="validate">
                        </div>
                        <div class="col s6 offset-s5">
                            <button onclick="apiFiltros.consultarPorAutor()" class="btn #8d6e63 brown lighten-1" type="button">Buscar por autor</button>							                            
                        </div>
                    </form>
                `;
    }
    function category(){
        let res = document.querySelector('#menuInicioFiltros');
        res.innerHTML = ``
        res.innerHTML += `
                    <button onclick="location.href='traerLibros.html'" class="btn #8d6e63 brown lighten-1" >Menu principal</button>
                    <a href="#modal2" class="btn modal-trigger brown lighten-1" >Filtrar busqueda</a>
                    <form>
                        <div class="input-field">
                            <h4> Categorias disponibles: </h4>
                            <button onclick="apiFiltros.consultarPorCategoria('Biografia')" class="btn #8d6e63 brown lighten-1" type="button">Biografia</button>							                            
                            <button onclick="apiFiltros.consultarPorCategoria('Cientifco')" class="btn #8d6e63 brown lighten-1" type="button">Cientifico</button>	
                            <button onclick="apiFiltros.consultarPorCategoria('Cuento')" class="btn #8d6e63 brown lighten-1" type="button">Cuento</button>
                            <button onclick="apiFiltros.consultarPorCategoria('Juveniles')" class="btn #8d6e63 brown lighten-1" type="button">Juveniles</button>
                            <button onclick="apiFiltros.consultarPorCategoria('Novela')" class="btn #8d6e63 brown lighten-1" type="button">Novela</button>	
                            <button onclick="apiFiltros.consultarPorCategoria('Poeticos')" class="btn #8d6e63 brown lighten-1" type="button">Poeticos</button>
                            <button onclick="apiFiltros.consultarPorCategoria('Referencia')" class="btn #8d6e63 brown lighten-1" type="button">Referencia</button>
                        </div>
                    </form>
                `;

    }
    function languages(){
        let res = document.querySelector('#menuInicioFiltros');
        res.innerHTML = ``
        res.innerHTML += `
                    <button onclick="location.href='traerLibros.html'" class="btn #8d6e63 brown lighten-1" >Menu principal</button>
                    <a href="#modal2" class="btn modal-trigger brown lighten-1" >Filtrar busqueda</a>
                    <form>
                        <div class="input-field">
                            <h4>Lenguajes disponibles: </h4>
                            <button onclick="apiFiltros.consultarPorLenguajeEspañol()" class="btn #8d6e63 brown lighten-1" type="button">Español</button>
                            <button onclick="apiFiltros.consultarPorLenguajeIngles()" class="btn #8d6e63 brown lighten-1" type="button">Ingles</button>
                            <button onclick="apiFiltros.consultarPorLenguajeFrances()" class="btn #8d6e63 brown lighten-1" type="button">Frances</button>
                        </div>
                    </form>
                `;

    }

    function consultarPorNombre(){
        var nombreLibro = document.getElementById('nombreLibro').value;
        var url = 'https://biblioeci.herokuapp.com/book/booksname/'+String(nombreLibro);
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                let libro = JSON.parse(this.responseText);
                mostrarLibro(libro)

            }
        }
    }

    function consultarPorLenguajeIngles(){
        localStorage.setItem('paginaLibro',0);
        var url = 'https://biblioeci.herokuapp.com/book/englishBooks';
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var aux = JSON.parse(this.responseText);
                libros = aux;
                mostrarLibros();

            }
        }
    }

    function consultarPorLenguajeEspañol(){
        localStorage.setItem('paginaLibro',0);
        var url = 'https://biblioeci.herokuapp.com/book/spanishBooks';
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var aux = JSON.parse(this.responseText);
                libros = aux;
                mostrarLibros();

            }
        }
    }

    function consultarPorLenguajeFrances(){
        localStorage.setItem('paginaLibro',0);
        var url = 'https://biblioeci.herokuapp.com/book/frenchBooks';
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var aux = JSON.parse(this.responseText);
                libros = aux;
                mostrarLibros();

            }
        }
    }

    function consultarPorCategoria(cadena){
        localStorage.setItem('paginaLibro',0);
        var url = 'https://biblioeci.herokuapp.com/book/bookscategory/'+String(cadena);
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var aux = JSON.parse(this.responseText);
                libros = aux;
                mostrarLibros();

            }
        }
    }


    function consultarPorAutor(){
        var nombreAutor = document.getElementById('nombreAutor').value;
        var url = 'https://biblioeci.herokuapp.com/book/authorname/'+String(nombreAutor);
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                let libro = JSON.parse(this.responseText);
                mostrarLibro(libro)

            }
        }
    }    
    function mostrarLibro(libros){
        let res = document.querySelector('#listaLibros');
        res.innerHTML = '';
        if(libros.available){
            availability = 'Disponible'
            res.innerHTML += `
                <tr>
                    <td>${libros.names}</td>
                    <td>${libros.author}</td>-
                    <td>${libros.publication}</td>
                    <td>${libros.category}</td>
                    <td>${libros.editorial}</td>
                    <td>${libros.languages}</td>
                    <td>${availability}</td>
                    <td>${libros.resume}</td>
                    <td>
                        <button onclick="apiLibros.rentBook(${String(libros.id)})" class="btn #8d6e63 brown lighten-1" id="libro-${libros.id}" type="button" >Alquilar</button>
                    </td>
                </tr>
                `
        }
        else{
            availability = 'No disponible'
            res.innerHTML += `
                <tr>
                    <td>${libros.names}</td>
                    <td>${libros.author}</td>-
                    <td>${libros.publication}</td>
                    <td>${libros.category}</td>
                    <td>${libros.editorial}</td>
                    <td>${libros.languages}</td>
                    <td>${availability}</td>
                    <td>${libros.resume}</td>
                </tr>
                `
        }
        
    }
    function mostrarLibros(){
        var totalLibros = libros.length;
        totalLibros = totalLibros/10;
        totalLibros = parseInt(totalLibros);
        console.log(totalLibros)
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
                    </tr>
                    `
            }
        }
        if (isPag == 0){
            btnPag.innerHTML += `
                    <button onclick="apiFiltros.btnNext();apiFiltros.mostrarLibros()" class="btn #8d6e63 brown lighten-1" type="button" >Siguiente</button>
            `
        }
        else if(isPag == totalLibros-1){
            btnPag.innerHTML += `
                    <button onclick="apiFiltros.btnPrev();apiFiltros.mostrarLibros()" class="btn #8d6e63 brown lighten-1" type="button" >Anterior</button>
            `
        }
        else{
            btnPag.innerHTML += `
                <button onclick="apiFiltros.btnPrev();apiFiltros.mostrarLibros()" class="btn #8d6e63 brown lighten-1" type="button" >Anterior</button>
                <p></p>
                <button onclick="apiFiltros.btnNext();apiFiltros.mostrarLibros()" class="btn #8d6e63 brown lighten-1" type="button" >Siguiente</button>
                    
            `
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
        nameBook: nameBook,
        nameAuthor: nameAuthor,
        category: category,
        languages: languages,
        consultarPorNombre: consultarPorNombre,
        consultarPorAutor: consultarPorAutor,
        consultarPorCategoria: consultarPorCategoria,
        consultarPorLenguajeIngles: consultarPorLenguajeIngles,
        consultarPorLenguajeEspañol: consultarPorLenguajeEspañol,
        consultarPorLenguajeFrances: consultarPorLenguajeFrances,
        mostrarLibros: mostrarLibros,
        mostrarLibro: mostrarLibro,
        btnNext: btnNext,
        btnPrev: btnPrev
    };
})();