'use strict'



// Create 'remove' button
let ul = document.querySelector('.ul');
let addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');
let letterPattern = /([a-zA-z0-9])/
addButton.addEventListener('click', function () {
    if (!input.value.match(letterPattern)) {
        alert('Input must be filled.');
        return false
    } else {
        let liElement = document.createElement('li');
        liElement.textContent = input.value;
        liElement.classList.add('list');
        let removeButton = document.createElement('button');
        removeButton.addEventListener("click", function () {
            liElement.parentNode.removeChild(liElement);
        });
        let icon = '<i class="fas fa-trash"></i>';
        removeButton.innerHTML = icon;
        removeButton.classList.add('removeBtn')
        liElement.appendChild(removeButton);
        ul.appendChild(liElement);
    }
    input.value = ""
})