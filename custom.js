// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


  document.addEventListener("DOMContentLoaded", function() {
    const courses = document.querySelectorAll('.course-col');

    function checkVisibility() {
      const windowHeight = window.innerHeight;

      courses.forEach(course => {
        const rect = course.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          course.classList.add('visible'); // Add visible class when in view
        }
      });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
  });
