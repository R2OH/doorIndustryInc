var something = document.getElementById("contactButton");

var something2 = document.getElementById("aboutButton");
var aboutText = `<p>This is what text will look like on this side of the web page. This is a wirefram of what the website will be. This will likely be where the About page will describe what Door Industry Inc is all about</p>`;

something.style.cursor = "pointer";
something2.style.cursor = "pointer";
something.onclick = function () {
  // do something...
  document.getElementById("loadContent").innerHTML = `
    <div class="container">
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="Email">Email</label>
    <input type="text" id="lname" name="lastname" placeholder="Your email..">

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Text here.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>
    `;
};

something2.onclick = function toggle() {
  document.getElementById("loadContent").innerHTML = aboutText;
};
