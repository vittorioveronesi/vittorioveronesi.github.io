//code for images
let myImage = document.querySelector('#a1');
let myImage2 = document.querySelector('#b1');
let myImage3 = document.querySelector('#c1');
let myImage4 = document.querySelector('#d1');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
        myImage.setAttribute ('src', 'images/2.jpg');
    } else {
        myImage.setAttribute ('src', 'images/1.jpg');
    }
}

myImage2.onclick = function() {
    let mySrc = myImage2.getAttribute('src');
    if(mySrc === 'images/b1.jpg') {
        myImage2.setAttribute ('src', 'images/b2.jpg');
    } else {
        myImage2.setAttribute ('src', 'images/b1.jpg');
    }
}

myImage3.onclick = function() {
    let mySrc = myImage3.getAttribute('src');
    if(mySrc === 'images/c1.png') {
        myImage3.setAttribute ('src', 'images/c2.png');
    } else {
        myImage3.setAttribute ('src', 'images/c1.png');
    }
}

myImage4.onclick = function() {
    let mySrc = myImage4.getAttribute('src');
    if(mySrc === 'images/d1.jpg') {
        myImage4.setAttribute ('src', 'images/d2.jpg');
    } else {
        myImage4.setAttribute ('src', 'images/d1.jpg'); 
    }
}




