const form = document.querySelector("#suscripcion")

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
    let nombre = form.nombre.value
    let telefono = form.telefono.value
    let email = form.email.value
    console.log(nombre)
    console.log(telefono)
    console.log(email)
    event.preventDefault()
    mostraValores(nombre,telefono,email)
    mandarEmail(nombre, email)
}

form.onsubmit = tomarValoresFormulario

// ST  a4bfd91d-0c12-4ba1-ba96-1fe9d648d39d