document.querySelector('#submit').addEventListener('click', function(event) {
    event.preventDefault();  // Evita el envío del formulario y la recarga de la página

    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let servicio1 = document.querySelector('#servicio').value;

    // Crear la URL de WhatsApp con los parámetros
    let url = "https://api.whatsapp.com/send?phone=+50258434148&text=*_Reserva%20de%20Cita*%0A*De*%0A%0A*Nombre*%0A" + cliente + 
    "%0A*Inventory Date*%0A" + fecha + 
    "%0A*Inventory Time*%0A" + hora + 
    "%0A*Servicio*%0A" + servicio1;   

    // Abrir WhatsApp con la URL creada
    window.open(url);
});


