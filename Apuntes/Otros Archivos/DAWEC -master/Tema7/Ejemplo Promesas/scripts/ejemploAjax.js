window.addEventListener('load', function() {
    document.getElementById('form').addEventListener('submit', (event) => {
        event.preventDefault();
        let idUser = document.getElementById('idUser').value;
        if (isNaN(idUser) || idUser == '') {
            alert('Debes introducir un número');
        } else {
            getPosts(idUser);
        }
    });
});

function getPosts(idUser) {
    let tbody = document.getElementsByTagName('tbody')[0];

    const peticion = new XMLHttpRequest();
    peticion.open('GET', 'https://jsonplaceholder.typicode.com/posts?' + 'userId=' + idUser);
    peticion.onreadystatechange = gestionarDatos();
    peticion.send();
    

    /* peticion.addEventListener('load', function() {
        if (peticion.status === 200) {
            const datos = JSON.parse(peticion.responseText);
            tbody.innerHTML = '';
            datos.forEach(post => {
                const newPost = document.createElement('tr');
                newPost.innerHTML = `
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>`;
                tbody.appendChild(newPost);
            });
        } else {
            console.error("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
        }
    });
    peticion.addEventListener('error', () => console.error('Error en la petición HTTP')); */
}