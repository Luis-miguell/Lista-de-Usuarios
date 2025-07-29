let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
class Usuario{
    constructor(info){
        this.urlFoto = info.urlFoto || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
        this.nombre = info.nombre;
        this.edad = info.edad;
        this.correo = info.correo;
        this.contrasenia = info.contrasenia;
        this.id = info.id;
    };

    generarTarjeta = () => {
        let article = document.createElement("article");

        let boton = document.createElement("button");
        boton.innerHTML = "&cross;";
        boton.setAttribute("class", "btn-del");
        boton.addEventListener("click", () => {
            let idx = usuarios.findIndex(user => user.id === this.id);
            usuarios.splice(idx, 1);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            location.reload();
        });
        article.appendChild(boton);

        let img = document.createElement("img");
        img.setAttribute("src", this.urlFoto);
        
        let div = document.createElement("div"); 

        let pNombre = document.createElement("p");
        let sNombre = document.createElement("span");
        sNombre.append("Nombre: ");
        pNombre.appendChild(sNombre);
        pNombre.append(this.nombre);

        let pEdad = document.createElement("p");
        let sEdad = document.createElement("span");
        sEdad.append("Edad: ");
        pEdad.appendChild(sEdad);
        pEdad.append(this.edad);

        let pCorreo = document.createElement("p");
        let sCorreo = document.createElement("span");
        sCorreo.append("Correo: ");
        pCorreo.appendChild(sCorreo);
        pCorreo.append(this.correo);

        let pContrasenia = document.createElement("p");
        let sContrasenia = document.createElement("span");
        sContrasenia.append("Contraseña: ");
        pContrasenia.appendChild(sContrasenia);
        pContrasenia.append(this.contrasenia);

        div.appendChild(pNombre);
        div.appendChild(pEdad);
        div.appendChild(pCorreo);
        div.appendChild(pContrasenia);

        article.appendChild(img);
        article.appendChild(div);

        return article;
    }

};

export default Usuario;