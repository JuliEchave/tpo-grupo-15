const form = document.querySelector("#suscripcion")

function mostarMensajExito(esExito,nombre,telefono,email){
    if(esExito){
        mostraValores(nombre,telefono,email)
        mandarEmail(nombre, email)
    }
}

function manejarErrores(errores){
    const keys = Object.keys(errores)
    let cantidadErrores = 0
    keys.forEach(function(key){
        const error = errores[key]
        if(error){
            cantidadErrores++
            alert(error)
        }
    })
return cantidadErrores
}

function validarNombre(nombre){
    if(nombre.length===0){
        return "El campo nombre debe tener al menos 1 caracter"
    }

    if(nombre.length>=50){
        return "El campo nombre debe tener menos de 50 caracteres"
    }

    if(!/^[a-zA-Z\s]+$/i.test(nombre)){
        return "El campo nombre solo acepta letras"
    }

    return "" 
}

function validarTelefono(telefono){
    if(telefono.length===0){
        return "El campo telefono debe tener al menos 1 caracter"
    }

    if(!/^[0-9]+$/i.test(telefono)){
        return "El campo telefono solo acepta numeros"
    }

    if(telefono.length>=15){
        return "El campo telefono debe tener menos de 15 caracteres"
    }
    
    return "" 
}

function validarEmail(email){
    if(email.length===0){
        return "El campo email debe tener al menos 1 caracter"
    }

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(email)){
        return "El email ingresado no es valido"
    }
    
    return "" 
}

function validarFormulario(nombre,telefono,email){
    const errorNombre = validarNombre(nombre)
    const errorTelefono = validarTelefono(telefono)
    const errorEmail = validarEmail(email)
    errores = {
        nombre:errorNombre,
        telefono:errorTelefono,
        email:errorEmail
    }
    const esExito = manejarErrores(errores) === 0
    mostarMensajExito(esExito,nombre,telefono,email)
}

function mandarEmail(nombre, email){
    Email.send({
        SecureToken : "a4bfd91d-0c12-4ba1-ba96-1fe9d648d39d",
        To : email,
        From : "fjtortolini@gmail.com",
        Subject : "Bienvenido!",
        Body : `Hola ${nombre}, gracias por suscribirte a nuestro newsletter!`
    }).then(
        message => alert(message)
    );
}

function mostraValores(nombre,telefono,email){
    form.className="oculto"
    document.querySelector("#nombre-mensaje").innerHTML = `Nombre registrado: ${nombre}`
    document.querySelector("#telefono-mensaje").innerHTML= `Telefono registrado: ${telefono}`
    document.querySelector("#email-mensaje").innerHTML = `Email registrado: ${email}`
    document.querySelector("#mensaje-exito").className=""
}

function tomarValoresFormulario(event){
    const nombre = form.nombre.value
    const telefono = form.telefono.value
    const email = form.email.value
    event.preventDefault()
    validarFormulario(nombre,telefono,email)
    
}

form.onsubmit = tomarValoresFormulario

// ST  a4bfd91d-0c12-4ba1-ba96-1fe9d648d39d
