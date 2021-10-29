const formulario = document.getElementById ("formulario");
const inputs = document.querySelectorAll ("#formulario input");


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


inputs.forEach (input) => {


    input.addEventListener ("keyup"); 
    
    
    }
    
    );


;




formulario.addEventListener ("submit", (e) => {


e.preventDefault (); 


}

);