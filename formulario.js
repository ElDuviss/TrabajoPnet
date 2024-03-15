const formulario = document.getElementById('Formulario');
const inputs = document.querySelectorAll('#Formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9}$/,
    DNI: /^\d{8}.*[a-zA-Z]$/
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        //Nombre
        case "Nombre":
            if(expresiones.nombre.test(e.target.value)) {
                document.getElementById('Grupo_Nombre').classList.remove('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_Nombre .Error').classList.remove('Error-activo');
            }else{
                document.getElementById('Grupo_Nombre').classList.add('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_Nombre .Error').classList.add('Error-activo');
            }
        break;
        //Primer Apellido
        case "PA":
            if(expresiones.nombre.test(e.target.value)) {
                document.getElementById('Grupo_PA').classList.remove('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_PA .Error').classList.remove('Error-activo');
            }else{
                document.getElementById('Grupo_PA').classList.add('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_PA .Error').classList.add('Error-activo');
            }
        break;
        //Segundo Apellido
        case "SA":
            if(expresiones.nombre.test(e.target.value)) {
                document.getElementById('Grupo_SA').classList.remove('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_SA .Error').classList.remove('Error-activo');
            }else{
                document.getElementById('Grupo_SA').classList.add('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_SA .Error').classList.add('Error-activo');
            }
        break;
        //DNI
        case "DNI":
            if(expresiones.DNI.test(e.target.value)) {
                document.getElementById('Grupo_DNI').classList.remove('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_DNI .Error').classList.remove('Error-activo');
            }else{
                document.getElementById('Grupo_DNI').classList.add('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_DNI .Error').classList.add('Error-activo');
            }
        break;
        //Correo Electrónico
        case "Correo":
            if(expresiones.correo.test(e.target.value)) {
                document.getElementById('Grupo_Correo').classList.remove('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_Correo .Error').classList.remove('Error-activo');
            }else{
                document.getElementById('Grupo_Correo').classList.add('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_Correo .Error').classList.add('Error-activo');
            }
        break;
        //Teléfono
        case "Telefono":
            if(expresiones.telefono.test(e.target.value)) {
                document.getElementById('Grupo_Telefono').classList.remove('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_Telefono .Error').classList.remove('Error-activo');
            }else{
                document.getElementById('Grupo_Telefono').classList.add('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_Telefono .Error').classList.add('Error-activo');
            }
        break;
        //Número de entradas
        case "NA":
            var Tipo = document.getElementById("Entrada").value;
            if(Tipo == "Normal"){
                if(e.target.value > 0 && e.target.value <= 90) {
                    document.getElementById('Grupo_NA').classList.remove('Formulario_Grupo-incorrecto');
                    document.querySelector('#Grupo_NA .Error').classList.remove('Error-activo');
                }else{
                    document.getElementById('Grupo_NA').classList.add('Formulario_Grupo-incorrecto');
                    document.querySelector('#Grupo_NA .Error').classList.add('Error-activo');
                }
            }
            if(Tipo == "Premium") {
                if(e.target.value > 0 && e.target.value <= 10) {
                    document.getElementById('Grupo_NA').classList.remove('Formulario_Grupo-incorrecto');
                    document.querySelector('#Grupo_NA .Error').classList.remove('Error-activo');
                }else{
                    document.getElementById('Grupo_NA').classList.add('Formulario_Grupo-incorrecto');
                    document.querySelector('#Grupo_NA .Error').classList.add('Error-activo');
                }
            }
        break;
        //Fecha
        case "Fecha":
            var fechaActual = new Date();
            var fechaIngresada = new Date(e.target.value);
            if (fechaIngresada >= fechaActual) {
                document.getElementById('Grupo_Fecha').classList.remove('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_Fecha .Error').classList.remove('Error-activo');
            } else {
                document.getElementById('Grupo_Fecha').classList.add('Formulario_Grupo-incorrecto');
                document.querySelector('#Grupo_Fecha .Error').classList.add('Error-activo');
            }
        break;
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});