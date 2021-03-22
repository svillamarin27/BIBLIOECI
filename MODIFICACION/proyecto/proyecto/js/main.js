function ciencia(){
	$( ".book1" ).hide();
	$( ".book2" ).hide();
	$( ".book3" ).hide();
	$( ".book4" ).hide();
	$( ".book5" ).hide();
	$( ".book6" ).show();
	$( ".book7" ).hide();
	$( ".book8" ).hide();
}
function literatura(){
	$( ".book1" ).show();
	$( ".book2" ).show();
	$( ".book3" ).show();
	$( ".book4" ).show();
	$( ".book5" ).hide();
	$( ".book6" ).hide();
	$( ".book7" ).show();
	$( ".book8" ).show();
}
function linguisticos(){
	$( ".book1" ).hide();
	$( ".book2" ).hide();
	$( ".book3" ).show();
	$( ".book4" ).hide();
	$( ".book5" ).hide();
	$( ".book6" ).hide();
	$( ".book7" ).hide();
	$( ".book8" ).hide();
}
function bibliograficos(){
	$( ".book1" ).hide();
	$( ".book2" ).hide();
	$( ".book3" ).hide();
	$( ".book4" ).hide();
	$( ".book5" ).show();
	$( ".book6" ).hide();
	$( ".book7" ).hide();
	$( ".book8" ).hide();
}

// function buscarTitulo(){

// 	let titulo = document.getElementById("titulo").value;
// 	let books = ["jobs", "animales"];
// 	let aux = "";
// 	let book1 = 0;
// 	for (var i = 0; i < books.length; i++) {
// 		if (titulo[i] == books[i]) {
// 			book1 ++;
// 			aux = (i+1);
// 			$(".book"+ aux).hide();
// 		}
// 	}

// }