let isImageListVisible = true;

async function listImages(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.length > 0) {
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        return null;
    }
}

function displayImages(images) {
    const imageListDiv = document.getElementById('imageList');
    imageListDiv.innerHTML = '';

    images.forEach(image => {
        const imageDiv = document.createElement('div');
        imageDiv.innerHTML = `<img src="${image.thumbnailUrl}" alt="${image.title}">`;
        imageListDiv.appendChild(imageDiv);
    });
}

async function toggleImageList() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const images = await listImages(url);

    if (images !== null) {
        displayImages(images);
        isImageListVisible = !isImageListVisible;
        const imageListDiv = document.getElementById('imageList');
        imageListDiv.style.display = isImageListVisible ? 'block' : 'none';
    } else {
        console.log('Nenhuma imagem encontrada.');
    }
}

toggleImageList();