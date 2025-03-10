//Modal imágenes
    const modalImagen = document.querySelector('#modal-imagen');
    
    modalImagen.addEventListener('show.bs.modal', function(event) {
        const enlace = event.relatedTarget;
        // nos dice a qué le hemos dado click

        const rutaImagen = enlace.getAttribute('data-bs-imagen');
        //leemos nuestro atributo data-bs-imagen y lo guardamos en rutaImagen
    
       // construimos la imagen
        const imagen = document.createElement('IMG');
        
          //creamos un template string para generar el nombre del archivo y su carpeta
          imagen.src = `build/img/${rutaImagen}.jpg`;

          imagen.classList.add('img-fluid');
          imagen.alt = 'Imagen Galería';

          //indicamos dónde queremos mostrarla (modal-body en este caso)
          const contenidoModal = document.querySelector('.modal-body');

          //insertamos la imagen como contenido del modal (es un elemento hijo)
          contenidoModal.appendChild(imagen);
    });
    
    //para cerrar el modal
    modalImagen.addEventListener('hidden.bs.modal', function() {
        const contenidoModal = document.querySelector('.modal-body');

        //necesario limpiar el modal-body para que las imágenes no se vayan acumulando
        contenidoModal.textContent = '';
    });

