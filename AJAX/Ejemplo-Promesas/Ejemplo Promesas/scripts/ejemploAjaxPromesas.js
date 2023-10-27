window.addEventListener('load', function() {
    document.getElementById('form').addEventListener('submit', (event) => {
        event.preventDefault();
        let idUser = document.getElementById('idUser').value;
        if (isNaN(idUser) || idUser == '') {
            alert('Debes introducir un número');
        } else {
            //Aquí empiezan las diferencias con el ejemplo ejemploAjax.js
            getPosts(idUser)
                .then((posts) => { //posts contiene los datos devueltos por la promesa
                    let tbody = document.getElementsByTagName('tbody')[0];
                    //Si todo ha ido bien se meten los datos en la tabla
                    tbody.innerHTML = '';
                    posts.forEach((post) => {
                        const newPost = document.createElement('tr');
                        newPost.innerHTML = `
                            <td>${post.userId}</td>
                            <td>${post.id}</td>
                            <td>${post.title}</td>
                            <td>${post.body}</td>`;
                        tbody.appendChild(newPost);
                    });
                })
                .catch(function(error) {
                    //En caso de que se haya producido un error, en este cao, se muestra por consola
                    console.error(error);
                });
        }
    });
});


/**
 * La función donde se crea y envía la petición devolverá una promesa.
 * @param {} idUser 
 */
function getPosts(idUser) {
    return new Promise((resolve, reject) => {
        let peticion = new XMLHttpRequest();
        peticion.open('GET', 'https://jsonplaceholder.typicode.com/posts?' + 'userId=' + idUser);
        peticion.send();
        peticion.addEventListener('load', () => {
            if (peticion.status === 200) {
                //a resolve se le pasa como parámetro los datos que devolverá la promesa en caso de que todo haya ido bien
                resolve(JSON.parse(peticion.responseText));
            } else {
                //a reject se le pasa también como parámetro los datos que devolverá la promesa en caso de error
                reject("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
            }
        });
        peticion.addEventListener('error', () => reject('Error en la petición HTTP'));
    });
}