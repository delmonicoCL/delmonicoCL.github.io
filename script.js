document.addEventListener
(
    "DOMContentLoaded",
    function()
    {
     
        function isNumber(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }
            // Previene el envío del formulario y la recarga de la página
            document.querySelector('#propina-form').onsubmit = function(event) {
            event.preventDefault(); 
        
            // Obtener los valores del formulario
            var cuentaTotal = document.getElementById('cuentaTotal').value;
            var calificacion = parseFloat(document.getElementById('calificacion').value);
            var numerodeInvitados = document.getElementById('numerodeInvitados').value;
        
                // Si calificacion está vacío, generar una alerta
            if (!calificacion) {
                alert('La CALIFICACION no puede estar VACIA');
                return;
            }
                
            // Si cuentaTotal está vacío, generar una alerta
            if (!cuentaTotal) {
                alert('El TOTAL DE LA CUENTA no puede estar vacío.');
                return;
            }
        
            // Si numerodeInvitados es igual a "0" o está vacío, establecerlo en "1"
            if (numerodeInvitados === "0" || numerodeInvitados === "") {
                numerodeInvitados = 1;
            } else {
                numerodeInvitados = parseInt(numerodeInvitados);
            }
        
            // Calcular la propina por persona y el total por persona
            var propina = (parseFloat(cuentaTotal) * calificacion) / numerodeInvitados;
            var totalxPersona = (parseFloat(cuentaTotal) + (parseFloat(cuentaTotal) * calificacion)) / numerodeInvitados;
        
            // Si la propina por persona es menor que 0.50, establecerla en 0.50
            if (propina < 0.50) {
                propina = 0.50;
            }
        
            // Mostrar los resultados en la página
            document.getElementById('propina').textContent = propina.toFixed(2);
            document.getElementById('totalxPersona').textContent = totalxPersona.toFixed(2);
        
            // Mostrar el contenedor de resultados
            document.getElementById('results').style.display = 'block';
        }
        

    }
);




