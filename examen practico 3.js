function calcularTotal() {
    const horas = parseInt(document.getElementById('horas').value);
    const tipoAuto = document.getElementById('tipo_auto').value;
    const resultadoDiv = document.getElementById('resultado');
    let precioPorHora = 0;

    if (horas <= 0 || tipoAuto === "") {
        resultadoDiv.textContent = "Ingrese un número de horas válido y seleccione un tipo de auto.";
        return;
    }

    switch (tipoAuto) {
        case 'chico':
            precioPorHora = 20.0;
            break;
        case 'camioneta':
            precioPorHora = 30.0;
            break;
        case 'camion':
            precioPorHora = 40.0;
            break;
        
    }

    const totalAPagar = horas * precioPorHora;
    resultadoDiv.textContent = `Total a pagar: $${totalAPagar}.00`;
}