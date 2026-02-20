
const fechaInput = document.getElementById("fecha");
const resultado = document.getElementById("resultado");

function calcular() {

    const nacimiento = new Date(fechaInput.value);

    const hoy = new Date();

    let años = hoy.getFullYear() - nacimiento.getFullYear();

    let meses = hoy.getMonth() - nacimiento.getMonth();

    let dias = hoy.getDate() - nacimiento.getDate();

    

    if (meses < 0 || (meses === 0 && dias < 0)) {
        años--;
    }

    

    if (años < 0) {
        resultado.textContent = "Fecha inválida";

        
        

    } else {
        resultado.textContent = "Tienes " + años + " años";
    }


}


