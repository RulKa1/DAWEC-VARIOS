fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => console.log(data));
  fetch('https://jsonplaceholder.typicode.com/todos/55')
  .then(response => response.json())
  .then(data => console.log(data));
  fetch('https://jsonplaceholder.typicode.com/todos/201')
  .then(response => response.json())
  .then(data => console.log(data));
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      userId: 5,
      title: 'Prueba de POST',
      completed: false
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => {
    console.log('Código de respuesta:', response.status);
    return response.json();
  })
  .then(data => console.log(data));
  fetch('https://jsonplaceholder.typicode.com/todos/76', {
  method: 'PUT',
  body: JSON.stringify({
    title: 'Tarea modificada'
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => {
  console.log('Código de respuesta:', response.status);
  return response.json();
})
.then(data => console.log(data));
fetch('https://jsonplaceholder.typicode.com/todos/32', {
  method: 'DELETE',
})
.then(response => {
  console.log('Código de respuesta:', response.status);
  return response.json();
})
.then(data => console.log(data));
