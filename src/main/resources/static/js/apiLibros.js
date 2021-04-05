$("#consultar-libros").on("click", availableBooks);

function availableBooks() {
    $.getJSON('http://localhost:8080/book/books',function(respuesta,status) {
            let res = document.querySelector('#cuerpo-tabla-libros');
            res.innerHTML = '';
            for (let item of respuesta){
                res.innerHTML += `
                    <tr>
                        <td>${item.names}</td>
                        <td>${item.author}</td>
                        <td>${item.publication}</td>
                        <td>${item.editorial}</td>
                        <td${item.languages}</td>
                    </td>
                `
            }
        })
}
