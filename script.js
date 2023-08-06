//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");

//select all subtopic pages
console.log(allpages);

hideall();
function hideall(){ //function to hide all pages
    for(let onepage of allpages){ //go through all subtopic pages
        onepage.style.display="none"; //hide it
    }
}
function show(pgno){ //function to show selected page no
        hideall();
        //select the page based on the parameter passed in
        let onepage=document.querySelector("#page"+pgno);
        //show the page
        onepage.style.display="grid";
        //href="history.html";
        
    }
    /*Listen for clicks on the buttons, assign anonymous
    eventhandler functions to call show function*/
    page1btn.addEventListener("click", function () {
        show(1);
    });
    page2btn.addEventListener("click", function () {
        show(2);
    });
    page3btn.addEventListener("click", function () {
        show(3);
    });

/*for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
hamBtn.addEventListener("click",toggleMenus);
const menuItemsList=document.querySelector("nav ul");

function toggleMenus(){ /*open and close menu*/
    menuItemsList.classList.toggle("menuHide");
}//can optimize using toggle class with css transitions

//lightbox (learnt from w3schools)
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
  
// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}