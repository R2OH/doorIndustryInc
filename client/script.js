var contactData = document.getElementById("contactButton");
var aboutData = document.getElementById("aboutButton");
var aboutText = `<p>This is what text will look like on this side of the web page. This is a wirefram of what the website will be. This will likely be where the About page will describe what Door Industry Inc is all about</p>`;
var contactForm = `
<div class="container">
<form action="/actionPage.php">
<label for="fname">First Name</label>
<input type="text" id="fname" name="firstname" placeholder="Your name..">

<label for="lname">Last Name</label>
<input type="text" id="lname" name="lastname" placeholder="Your last name..">

<label for="Email">Email</label>
<input type="text" id="lname" name="lastname" placeholder="Your email..">

<label for="subject">Subject</label>
<select name="cars" id="cars">
  <option value="schedule">Schedule A Consoltation</option>
  <option value="inquery">Inventory Inquery</option>
</select>
<input type="submit" value="Submit">
</form>
</div>
`;

contactData.style.cursor = "pointer";
aboutData.style.cursor = "pointer";

contactData.onclick = function () {
  document.getElementById("loadContent").innerHTML = contactForm;
};

aboutData.onclick = function toggle() {
  document.getElementById("loadContent").innerHTML = aboutText;
};

function slideshow() {
  document.getElementById("loadContent").innerHTML = aboutText;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
