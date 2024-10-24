document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const listitem = document.createElement('li');
    listitem.innerHTML = document.getElementById('names').value;
    document.querySelector('ul').appendChild(listitem);

    document.getElementById('fire').setAttribute('class', "flame")
})