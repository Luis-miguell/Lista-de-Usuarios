import Usuario from "../clases/usuario.js";
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const main = document.querySelector("main");

usuarios.forEach((user) => {

    let userPPC = new Usuario(user);  //User pasado por clase (userPPC)
    main.appendChild(userPPC.generarTarjeta());

});