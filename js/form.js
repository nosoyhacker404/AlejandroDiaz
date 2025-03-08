// Validación de la hora y conversión a 12 horas
document.querySelector('#hora').addEventListener('input', function(event) {
    let timeValue = event.target.value;
    
    // Regex para validar el formato de hora 12 horas (ejemplo: 4:00 PM o 4:00 AM)
    let regex = /^([1-9]|1[0-2]):([0-5][0-9])\s?(AM|PM)$/i;

    if (!regex.test(timeValue)) {
        // Si el formato es incorrecto, se muestra un mensaje (opcional)
        console.log("Formato de hora inválido. Asegúrate de usar el formato 12 horas (ej: 4:00 PM)");
    }
});

document.querySelector('#submit').addEventListener('click', function(event) {
    event.preventDefault();  // Evita el envío del formulario y la recarga de la página

    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let servicio1 = document.querySelector('#servicio').value;

    // Validación de hora para asegurarse de que esté en formato 12 horas
    if (!hora.match(/^([1-9]|1[0-2]):([0-5][0-9])\s?(AM|PM)$/i)) {
        alert("Por favor, ingresa la hora en formato de 12 horas (ejemplo: 4:00 PM)");
        return;
    }

    // Crear la URL de WhatsApp con los parámetros
    let url = "https://api.whatsapp.com/send?phone=+50258434148&text=*Reservación%20de%20Cita*%0A*De*%0A%0A*Nombre*%0A" + encodeURIComponent(cliente) + 
    "%0A*Fecha*%0A" + encodeURIComponent(fecha) + 
    "%0A*Hora*%0A" + encodeURIComponent(hora) + 
    "%0A*Servicio*%0A" + encodeURIComponent(servicio1);   

    // Abrir WhatsApp con la URL creada
    window.open(url);
});
