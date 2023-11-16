function listPosts(url, page = 1, pageSize = 10) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    fetch(`${url}?_start=${startIndex}&_limit=${pageSize}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                displayComments(data);
                createPagination(page, pageSize);
            } else {
                document.getElementById('comentarios').innerHTML = 'Nenhum comentário encontrado.';
                document.getElementById('pagination').innerHTML = '';
            }
        })
        .catch(error => console.error('Erro ao obter dados:', error));
}

function displayComments(comments) {
    const commentsDiv = document.getElementById('comentarios');
    commentsDiv.innerHTML = '';

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `<strong>${comment.title}</strong><br>${comment.body}<hr>`;
        commentsDiv.appendChild(commentDiv);
    });
}

function createPagination(currentPage, pageSize) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const totalPages = Math.ceil(data.length / pageSize);

            const paginationDiv = document.getElementById('pagination');
            paginationDiv.innerHTML = '';

            for (let i = 1; i <= totalPages; i++) {
                const pageLink = document.createElement('a');
                pageLink.href = '#';
                pageLink.textContent = i;

                if (i === currentPage) {
                    pageLink.className = 'active';
                }

                pageLink.addEventListener('click', function () {
                    listPosts('https://jsonplaceholder.typicode.com/posts', i, pageSize);
                });

                paginationDiv.appendChild(pageLink);
            }
        })
        .catch(error => console.error('Erro ao criar paginação:', error));
}

listPosts('https://jsonplaceholder.typicode.com/posts');