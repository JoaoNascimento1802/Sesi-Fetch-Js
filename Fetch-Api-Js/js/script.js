fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usuario => {
        const todosusuario = document.getElementById('listarUsuario');

        usuario.forEach(user => {
            const cadausuario = document.createElement('li');
            cadausuario.textContent = user.name + '('+ user.email +')';
            todosusuario.appendChild(cadausuario);
        });
    })
    .catch(error => console.error('Erro ao buscar usuários:', error));
