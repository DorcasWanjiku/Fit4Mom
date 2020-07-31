function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  // Create Vars
const myAllImages = document.querySelectorAll(".slider-container img");
const nextButton = document.getElementById('btn-right');
const prevButton = document.getElementById('btn-left');
const indecatorParent = document.querySelector('#indecators');
const sliderText = document.getElementById('slide-number');

// Get Numbers Of Slide 
const slidesCount = myAllImages.length;

// First Slide
let startCounting = 0;

// Add Event Lisrtener
nextButton.addEventListener('click', moveToNext);
prevButton.addEventListener('click', moveToPrev);

// Create Ul 
let indecatorsItems = document.createElement('ul');
// Add Class To Ul 
indecatorsItems.setAttribute('class', 'ul-items');

// Create Li 
for (let i = 0; i < slidesCount; i += 1) {
    let indecatorsListItems = document.createElement('li');

    // Append Li To The Main Ul
    indecatorsItems.appendChild(indecatorsListItems);
}

indecatorParent.appendChild(indecatorsItems);

// Get The Ul Created By Js 
const newUlList = document.querySelectorAll('.ul-items li');

// Add Checker Function 
theChecker();

// Create moveToNext Function 
function moveToNext() {
    if (nextButton.classList.contains('disable')) {
        return false;
    } else {
        startCounting++;
        theChecker();
    }
}
// Create moveToPrev Function 
function moveToPrev() {
    if (prevButton.classList.contains('disable')) {
        return false;
    } else {
        startCounting--;
        theChecker();
    }
}

for (let i = 0; i < newUlList.length; i++) {
    newUlList[i].onclick = function () {
        startCounting = i;
        theChecker();
    }
}

// Create The Checker Function
function theChecker() {
    removeAll();
    // Add Active Class To Images 
    myAllImages[startCounting].classList.add('active');
    // Add Active Class To List 
    newUlList[startCounting].classList.add('active');
}

// // Remove All Actives Classes Function 
function removeAll() {
    // Remove Active Class from Images
    for (let j = 0; j < slidesCount; j++) {
        myAllImages[j].classList.remove('active');
    }
    // Remove Active Class from List Items
    for (let j = 0; j < newUlList.length; j++) {
        newUlList[j].classList.remove('active');
    }
    // Check If The Item Is The First
    if (startCounting === 0) {
        prevButton.classList.add('disable')
    } else {
        prevButton.classList.remove('disable')
    }
    // Check If The Item Is The Last
    if (startCounting === slidesCount - 1) {
        nextButton.classList.add('disable')
    } else {
        nextButton.classList.remove('disable')
    }
}


