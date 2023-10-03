document.querySelector('#propina-form').onsubmit = function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    // Obtener los valores del formulario
    var cuentaTotal = parseFloat(document.getElementById('cuentaTotal').value);
    var calificacion = parseFloat(document.getElementById('calificacion').value);
    var numerodeInvitados = parseInt(document.getElementById('numerodeInvitados').value);

    // Calcular la propina por persona y el total por persona
    var propina = (cuentaTotal * calificacion) / numerodeInvitados;
    var totalxPersona = (cuentaTotal + (cuentaTotal * calificacion)) / numerodeInvitados;

    // Mostrar los resultados en la página
    document.getElementById('propina').textContent = propina.toFixed(2);
    document.getElementById('totalxPersona').textContent = totalxPersona.toFixed(2);

    // Mostrar el contenedor de resultados
    document.getElementById('results').style.display = 'block';
}
