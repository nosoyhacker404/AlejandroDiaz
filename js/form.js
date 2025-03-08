document.querySelector('#submit').addEventListener('click', function(event) {
    event.preventDefault();  // Evita que el formulario se envíe y la página se recargue.

    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let servicio1 = document.querySelector('#servicio').value;

    // Asegúrate de que los valores no estén vacíos antes de continuar.
    if (!cliente || !fecha || !hora || !servicio1) {
        alert("Por favor, llena todos los campos.");
        return; // Evita abrir WhatsApp si algún campo está vacío.
    }

    // Crear la URL de WhatsApp con los parámetros
    let url = "https://api.whatsapp.com/send?phone=+50258434148&text=*Reservación%20de%20Cita*%0A*De*%0A%0A*Nombre*%0A" + encodeURIComponent(cliente) + 
    "%0A*Fecha*%0A" + encodeURIComponent(fecha) + 
    "%0A*Hora*%0A" + encodeURIComponent(hora) + 
    "%0A*Servicio*%0A" + encodeURIComponent(servicio1);   

    // Abrir WhatsApp en una nueva ventana o pestaña
    window.open(url, '_blank');
});
