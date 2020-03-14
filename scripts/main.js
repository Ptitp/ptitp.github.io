document.querySelector('ul').addEventListener('click', function() {
    alert('Il est interdit de cliquer sur cette liste !!');
});

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/coolmamie.jpg') {
        myImage.setAttribute('src', 'images/mamie2.jpg');
    } else {
        myImage.setAttribute('src', 'images/coolmamie.jpg');        
    }
});

let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
//    localStorage.setItem('name', 'Emile');
    myHeading.textContent = 'Attention,' + myName + ' une mamie peut en cacher une autre !';
}

// if (!localStorage.getItem('nom')) {
//    setUserName();
// } else {
//     let storedName = localStorage.getItem('nom');
//    myHeading.textContent = 'Rappel : Attention,' + myName + ' une mamie peut en cacher une autre !';
// }

myButton.addEventListener('click', function() {
    setUserName();
});

localStoragE