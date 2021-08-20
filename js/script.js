//slider 1 section
let slides = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];

let currentSlide = 0;

function slider() {

	document.getElementById('slide').src = slides[currentSlide];

	if (currentSlide < slides.length - 1) {
		currentSlide++;
	}
	else {
		currentSlide = 0;
	}

	setTimeout("slider()", 5000);
}

window.onload = slider();

//profile section skills animation on scroll
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


// $('.slider span.next').click(function() {
//   $current = $(this).siblings('img.active');
//   $next = $current.next('img');
//   if ($next.length != 0) {
//     $current.removeClass('active');
//     $next.addClass('active');
//   }
// })
// $('.slider span.prev').click(function() {
//   $current = $(this).siblings('img.active');
//   $prev = $current.prev('img');
//   if ($prev.length != 0) {
//     $current.removeClass('active');
//     $prev.addClass('active');
//   }
// })