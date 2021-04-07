/*
https://biblioeci.herokuapp.com/book/books
http://localhost:8080/book/books
*/

document.querySelector('#TL-traer-libros').addEventListener('click', availableBooks)
var qrLastSupper = document.createElement("img");
qrLastSupper.src = "./images/descarga.jpg";
document.body.appendChild(qrLastSupper); 
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
