apiFiltros = (function(){
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
                            <button onclick="" class="btn #8d6e63 brown lighten-1" id="I-Sign-in" type="button">Buscar por nombre</button>							                            
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
                            <button onclick="" class="btn #8d6e63 brown lighten-1" id="I-Sign-in" type="button">Buscar por autor</button>							                            
                        </div>
                    </form>
                `;
    }
    function category(){

    }
    function languages(){

    }
    
    return {
        nameBook: nameBook,
        nameAuthor: nameAuthor
    };
})();