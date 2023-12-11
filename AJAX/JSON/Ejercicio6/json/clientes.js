// Obtener datos del archivo JSON
fetch('http://localhost:3000/clientes')
.then(response => response.json())
.then(data => {
    // Obtener el cuerpo de la tabla
    const clientesBody = document.getElementById('clientes-body');

    // Almacena los datos de clientes en una variable
    var clientes = data.clientes;

    // Iterar sobre los datos y agregar filas a la tabla
    clientes.forEach(cliente => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cliente.id}</td>
            <td>${cliente.nombre} ${cliente.apellidos}</td>
            <td>${cliente.DNI}</td>
            <td>${cliente.fechaNac}</td>
            <td>${cliente.Sexo}</td>
            <td>${cliente.preferencias}</td>
        `;
        clientesBody.appendChild(row);
    });

    // Función para agregar un nuevo cliente
    function agregarCliente() {
        var form = document.getElementById("cliente-form");
        var nombre = form.elements["nombre"].value;
        var apellidos = form.elements["apellidos"].value;
        var dni = form.elements["dni"].value;
        var fechaNacimiento = form.elements["fecha_nacimiento"].value;
        var sexo = form.elements["sexo"].value;
        var preferencias = Array.from(form.elements["preferencias[]"])
                            .filter(e => e.checked)
                            .map(e => e.value)
                            .join("_");

        // Crea un nuevo objeto cliente con los datos del formulario
        var nuevoCliente = {
            id: clientes.length + 1,
            nombre: nombre,
            apellidos: apellidos,
            DNI: dni,
            fechaNac: fechaNacimiento,
            Sexo: sexo,
            preferencias: preferencias
        };

        // Agrega el nuevo cliente al array de clientes y actualiza la tabla
        clientes.push(nuevoCliente);
        actualizarTabla();
    }

    // Función para actualizar la tabla con los datos del cliente
    function actualizarTabla() {
        clientesBody.innerHTML = "";
        clientes.forEach(function(cliente) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cliente.id}</td>
                <td>${cliente.nombre} ${cliente.apellidos}</td>
                <td>${cliente.DNI}</td>
                <td>${cliente.fechaNac}</td>
                <td>${cliente.Sexo}</td>
                <td>${cliente.preferencias}</td>
            `;
            clientesBody.appendChild(row);
        });
    }

    // Asigna la función agregarCliente al evento click del botón
    var agregarButton = document.getElementById("agregar-button");
    agregarButton.addEventListener("click", agregarCliente);
})
.catch(error => console.error('Error al obtener los datos:', error));
