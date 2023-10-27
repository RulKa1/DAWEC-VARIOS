fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const usuariosTable = document.getElementById('usuariosTable').getElementsByTagName('tbody')[0];

        data.forEach(usuario => {
            const fila = usuariosTable.insertRow();
            const celdaNombre = fila.insertCell();
            const celdaCorreo = fila.insertCell();

            celdaNombre.textContent = usuario.name;
            celdaCorreo.textContent = usuario.email;
            console.log(usuario.name);
            console.log(usuario.email);
        });
    })
    .catch(error => console.error('Error:', error));
