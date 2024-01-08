export const generateHtml = (array) => {
    if (array.length !== 0 && array[0].length !== 0) {
        return `<ul>${array.map(item => `<li>${item}</li>`).join('')}</ul>`
    }

    return ''
}

export const generateHtmlInstruction = (array) => {
    let result = ''

    array.forEach(item => {
        let html = `<div><h2>${item.title}</h2><p>${item.description.replaceAll('\n', '<br />')}</p><img src="${item.image}" alt="картинка" /></div>`

        result += html
    })

    return result
}