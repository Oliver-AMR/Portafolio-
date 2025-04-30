function leer(){
	var nombre=document.forms["formulario"].elements[0].value;
	
	var clave=document.getElementById("pass").value;

	var car=document.getElementsByTagName("select")[0].value;

	var gen=document.getElementsByName("genero");

	var i,g;
	for(i=0; i<gen.length; i++){
		if(gen[i].checked){
			g= gen[i].value;
		}
	}

	var acept=document.getElementById("terminos").checked;



	document.getElementById("datos").innerHTML=
	"\<br> Tu nombre es: "+nombre+
	"\<br> Password: "+clave+
	"\<br> Carrera: "+car+
	"\<br> Genero: "+g+
	"\<br> Acepto el acuerdo: "+acept;

	
}