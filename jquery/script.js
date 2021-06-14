$(document).ready(function () {
  $(document).scroll(function () {
    $("#nav").toggleClass("scrolled", $(this).scrollTop() > $("#nav").height());
  });

  $(".tutup").click(function () {
    $(".modal").css("display", "none");
  });

  $(".owl-carousel").owlCarousel();

  $("#bar").click(function () {
    $("#nav").toggleClass("warna");
  });
});

// Modal Gambar
const container = document.querySelector(".row");
const jumbo = document.querySelector(".jumbo");
const thumb = document.querySelectorAll(".thumb");
const modal = document.getElementById("myModal");
const nav = document.querySelector(".navbar");

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
  }
  modal.style.display = "block";
});

AOS.init();
