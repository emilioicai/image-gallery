import 'whatwg-fetch'

export function fetchImagesPerPage(page = 1) {
    return fetch('/images/' + page).then(function(response) {
        return response.json()
    });
}
