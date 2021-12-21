
    const modalImagen = document.querySelector('#modal-imagen');
if(modalImagen){
    
    modalImagen.addEventListener('show.bs.modal', function(event){ //Cuando abro el modal
        const enlace = event.relatedTarget;
        const rutaImagen = enlace.getAttribute('data-bs-imagen');
        
        //Construir Imagen
        const imagen = document.createElement('IMG'); //Creo una etiqueta img
        imagen.src = `img/${rutaImagen}.jpg`; //Le agrego el src
        imagen.classList.add('img-fluid'); //Le agrego una clase
        imagen.alt = 'Imagen Galeria'; //Le agrego el alt

        const contenidoModal = document.querySelector('.modal-body'); //Le agrego la imagen el cuerpo del modal
        contenidoModal.appendChild(imagen);
    })

    modalImagen.addEventListener('hidden.bs.modal', function(){ //Cuando cierro el modal
        contenidoModal = document.querySelector('.modal-body');
        contenidoModal.textContent = '';
    })
    
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()