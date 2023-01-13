export function generateHtml(array) {
    if (array.length !== 0 && array[0].length !== 0) {
        array = array.map(item => `<li>${item}</li>`)
        return `<ul>${array}</ul>`
    }

    return ''
}