const btnCrearNota = document.querySelector(".subir")
const inputTitulo = document.getElementById("Titulo")


btnCrearNota.addEventListener("click", (e) =>{
    e.preventDefault()
    const datosYaCreados = document.querySelector(".datos-ya-creado")
    const datoTitulo = document.createElement("div")
    const divDato = document.createElement("div")
    const h2_datotitulo = document.createElement("h2")
    const p_datotitulo = document.createElement("p")
    const borrar = document.createElement("div")
    const botonBorrar = document.createElement("button")
    const check = document.createElement("input")
    const divH2 = document.createElement("div")
    if(inputTitulo.value == ""){
        inputTitulo.style.border = "2px solid red"
    } else{ 
        divH2.classList.add("divh2")
        inputTitulo.style.border = "2px solid #fff"
        divDato.classList.add("dato")
        datosYaCreados.append(divDato)
        datoTitulo.classList.add("datoTitulo")
        divDato.append(datoTitulo)
        divH2.append(check)
        datoTitulo.append(divH2)
        divH2.appendChild(h2_datotitulo)
        datoTitulo.append(p_datotitulo)
        check.setAttribute("type", "checkbox")
        h2_datotitulo.innerHTML = inputTitulo.value;
        let fecha = new Date()
        let mes = fecha.getMonth()
        let dia = fecha.getDate()
        let año = fecha.getFullYear()
        let hora = fecha.getHours()
        let minutos = fecha.getMinutes()
        p_datotitulo.innerHTML = mes + "/" + dia + "/" + año + " " + hora + ":" + minutos;
        borrar.classList.add("botonBorrar")
        divDato.append(borrar)
        borrar.append(botonBorrar)
        botonBorrar.innerHTML = "Borrar"
        botonBorrar.addEventListener("click", () =>{
            divDato.remove()
        })
        check.addEventListener("change", () =>{
            if(this.checked){
                h2_datotitulo.style.textDecoration = "line-through"
            } else{
                h2_datotitulo.style.textDecoration = "none"
            }
        })
    }
})




