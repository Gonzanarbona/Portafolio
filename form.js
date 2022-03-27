
const inputs = document.querySelectorAll("#form input");
const texto = document.querySelector("#form textarea");
var palabra = "";



const campos = {
    nombreapellido: false,
    email: false,
    asunto: false,
    mensaje: false
}


const expresiones = {
    nombreapellido: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto:  /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    mensaje:  /^[a-zA-ZÀ-ÿ0-9_.+-:;@%()\s]{1,300}$/,
}

const validarFormulario = (e) => {
    switch (e.target.name) {            //comprueba el evento a que input pertenece
        case "nombreapellido":
            if(expresiones.nombreapellido.test(e.target.value)){
                document.getElementById("datos-formulario_nombreapellido").classList.remove("formulario__grupo-incorrecto");
                document.getElementById("datos-formulario_nombreapellido").classList.add("formulario__grupo-correcto");
                document.querySelector("#datos-formulario_nombreapellido .formulario__input-error").classList.remove("formulario__input-error-activo");
                campos[nombreapellido]= true;
            }else{
                document.getElementById("datos-formulario_nombreapellido").classList.add("formulario__grupo-incorrecto");
                document.getElementById("datos-formulario_nombreapellido").classList.remove("formulario__grupo-correcto");
                document.querySelector("#datos-formulario_nombreapellido .formulario__input-error").classList.add("formulario__input-error-activo");
                campos[nombreapellido]= false;
            }
            
        break;
        case "email":
            if(expresiones.email.test(e.target.value)){
                document.getElementById("datos-formulario_email").classList.remove("formulario__grupo-incorrecto");
                document.getElementById("datos-formulario_email").classList.add("formulario__grupo-correcto");
                document.querySelector("#datos-formulario_email .formulario__input-error").classList.remove("formulario__input-error-activo");
                campos[email]= true;
            }else{
                document.getElementById("datos-formulario_email").classList.add("formulario__grupo-incorrecto");
                document.getElementById("datos-formulario_email").classList.remove("formulario__grupo-correcto");
                document.querySelector("#datos-formulario_email .formulario__input-error").classList.add("formulario__input-error-activo");
                campos[email]= false;
            }
            
        break;
        
        case "asunto":
            if(expresiones.asunto.test(e.target.value)){
                document.getElementById("datos-formulario_asunto").classList.remove("formulario__grupo-incorrecto");
                document.getElementById("datos-formulario_asunto").classList.add("formulario__grupo-correcto");
                document.querySelector("#datos-formulario_asunto .formulario__input-error").classList.remove("formulario__input-error-activo");
                campos[asunto]= true;
            }else{
                document.getElementById("datos-formulario_asunto").classList.add("formulario__grupo-incorrecto");
                document.getElementById("datos-formulario_asunto").classList.remove("formulario__grupo-correcto");
                document.querySelector("#datos-formulario_asunto .formulario__input-error").classList.add("formulario__input-error-activo");
                campos[asunto]= false;
            }
            
        break;
    }
}
const validarPalabra = (e) => {
    switch (e.target.name) {            //comprueba el evento a que textarea pertenece
        case "mensaje":
            if(expresiones.mensaje.test(e.target.value)){
                document.getElementById("datos-formulario_mensaje").classList.remove("formulario__grupo-incorrecto");
                document.getElementById("datos-formulario_mensaje").classList.add("formulario__grupo-correcto");
                document.querySelector("#datos-formulario_mensaje .formulario__input-error").classList.remove("formulario__input-error-activo");
                campos[mensaje]= true;
            }else{
                document.getElementById("datos-formulario_mensaje").classList.add("formulario__grupo-incorrecto");
                document.getElementById("datos-formulario_mensaje").classList.remove("formulario__grupo-correcto");
                document.querySelector("#datos-formulario_mensaje .formulario__input-error").classList.add("formulario__input-error-activo");
                campos[mensaje]= false;
            }
        break;
    }
    
}




inputs.forEach((input) =>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

mensaje.addEventListener("keyup", validarPalabra);
mensaje.addEventListener("blur", validarPalabra);

//Envio de formulario
const form = document.querySelector("#form");
form.addEventListener("submit", envioFormulario);

async function envioFormulario(event){
    event.preventDefault()
    const $form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: $form,
        headers: {
            "Accept": "application/json"
        }
    })
    if (response.ok){
        this.reset ();
        alert("Gracias por contactarme, responderé a la brevedad");
    }
}



