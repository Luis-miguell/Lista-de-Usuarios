import Usuario from "./clases/usuario.js";

const form = document.querySelector("form");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let info = {
        urlFoto: form.foto.value,
        nombre: form.nombre.value,
        edad: form.edad.value,
        correo: form.correo.value,
        contrasenia: form.contrasenia.value
    };

    form.reset();

    usuarios.push(new Usuario(info));
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

});