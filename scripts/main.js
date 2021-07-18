//code for images
let myImage = document.querySelector('#a1');
let myImage2 = document.querySelector('#b1');
let myImage3 = document.querySelector('#c1');
let myImage4 = document.querySelector('#d1');
let myImage5 = document.querySelector('#e1');
let myImage6 = document.querySelector('#snake1');
let myImage7 = document.querySelector('#comunorto1');

myImage.onmouseover = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
        myImage.setAttribute ('src', 'images/2.jpg');
    } else {
        myImage.setAttribute ('src', 'images/1.jpg');
    }
}

myImage2.onmouseover = function() {
    let mySrc = myImage2.getAttribute('src');
    if(mySrc === 'images/b1.jpg') {
        myImage2.setAttribute ('src', 'images/b2.jpg');
    } else {
        myImage2.setAttribute ('src', 'images/b1.jpg');
    }
}

myImage3.onmouseover = function() {
    let mySrc = myImage3.getAttribute('src');
    if(mySrc === 'images/c1.png') {
        myImage3.setAttribute ('src', 'images/c2.png');
    } else {
        myImage3.setAttribute ('src', 'images/c1.png');
    }
}

myImage4.onmouseover = function() {
    let mySrc = myImage4.getAttribute('src');
    if(mySrc === 'images/d1.jpg') {
        myImage4.setAttribute ('src', 'images/d2.jpg');
    } else {
        myImage4.setAttribute ('src', 'images/d1.jpg'); 
    }
}

myImage5.onmouseover = function() {
    let mySrc = myImage5.getAttribute('src');
    if(mySrc === 'images/e1.png') {
        myImage5.setAttribute ('src', 'images/e2.png');
    } else {
        myImage5.setAttribute ('src', 'images/e1.png'); 
    }
}

myImage6.onmouseover = function() {
    let mySrc = myImage6.getAttribute('src');
    if(mySrc === 'images/snake1.png') {
        myImage6.setAttribute ('src', 'images/snake2.png');
    } else {
        myImage6.setAttribute ('src', 'images/snake1.png'); 
    }
}

myImage7.onmouseover = function() {
    let mySrc = myImage7.getAttribute('src');
    if(mySrc === 'images/comunorto1.jpg') {
        myImage7.setAttribute ('src', 'images/comunorto2.jpg');
    } else {
        myImage7.setAttribute ('src', 'images/comunorto1.jpg'); 
    }
}






