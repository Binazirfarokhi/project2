let barsbutton = document.getElementById("bars");
let toggleElement = document.getElementById("toggleDiv");

barsbutton.addEventListener("click", () => {
  toggleElement.classList.toggle("showmenu");
});

$("#priceButton").on("click", () => {
  if ($("#priceButton").attr("class").includes("fa-plus")) {
    $("#priceButton").removeClass("fa-plus");
    $("#priceButton").addClass("fa-minus");
    $("#priceText").addClass("show");
    $("#priceText").removeClass("hide");
  } else {
    $("#priceButton").removeClass("fa-minus");
    $("#priceButton").addClass("fa-plus");
    $("#priceText").addClass("hide");
    $("#priceText").removeClass("show");
  }
});
$("#whyButton").on("click", () => {
  if ($("#whyButton").attr("class").includes("fa-plus")) {
    $("#whyButton").removeClass("fa-plus");
    $("#whyButton").addClass("fa-minus");
    $("#whyText").addClass("show");
    $("#whyText").removeClass("hide");
  } else {
    $("#whyButton").removeClass("fa-minus");
    $("#whyButton").addClass("fa-plus");
    $("#whyText").addClass("hide");
    $("#whyText").removeClass("show");
  }
});
$("#howButton").on("click", () => {
  if ($("#howButton").attr("class").includes("fa-plus")) {
    $("#howButton").removeClass("fa-plus");
    $("#howButton").addClass("fa-minus");
    $("#howText").addClass("show");
    $("#howText").removeClass("hide");
  } else {
    $("#howButton").removeClass("fa-minus");
    $("#howButton").addClass("fa-plus");
    $("#howText").addClass("hide");
    $("#howText").removeClass("show");
  }
});

// slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

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
