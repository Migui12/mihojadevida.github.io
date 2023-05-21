$(document).ready(function() {
  // Scroll suave al hacer clic en los enlaces del menú de navegación
  $('nav ul li a').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
  });

  // Cargar el contenido del archivo experiencia.json utilizando AJAX
  $.ajax({
    url: 'experiencia.json',
    dataType: 'json',
    success: function(data) {
      if (data && data.length > 0) {
        var experienciaContenido = $('#experiencia-contenido');
        $.each(data, function(index, experiencia) {
          var experienciaItem = $('<div>').addClass('experiencia-item');
          $('<h3>').text(experiencia.puesto).appendTo(experienciaItem);
          $('<p>').addClass('experiencia-detalles').html('<strong>Fecha:</strong> ' + experiencia.fecha).appendTo(experienciaItem);
          $('<p>').addClass('experiencia-detalles').html('<strong>Descripción:</strong> ' + experiencia.descripcion).appendTo(experienciaItem);
          experienciaItem.appendTo(experienciaContenido);
        });
      }
    },
    error: function() {
      console.log('Error al cargar el archivo experiencia.json');
    }
  });
});
