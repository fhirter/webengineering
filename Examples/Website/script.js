function textHandler(text) {
    console.log('balzl')
    const tableElement = document.getElementById('data');

    const row = document.createElement('tr')
    const cell = document.createElement('td')

    cell.innerText = text;

    row.appendChild(cell);
    tableElement.appendChild(row);
}

fetch('data.csv')
    .then((response) => {
        console.log('foo')
        return response.text()
    })
    .then(textHandler)
    .catch((error) => {
        console.log(error)
    })


console.log('bar')

