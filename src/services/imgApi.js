export async function getImages(inputValue, page = 1) {
    const url = 'https://pixabay.com/api/';
    const API_KEY = '36458909-4e0d09ffdb7011fecd43404f2';

    return await fetch(`${url}?q=${inputValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json());
}