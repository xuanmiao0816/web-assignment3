// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

    // This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});


// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
  
    




    // Booking Popup Logic
    document.addEventListener("DOMContentLoaded", function () {
        const bookNowLink = Array.from(document.querySelectorAll('.cs-li-link'))
          .find(link => link.textContent.trim().toLowerCase() === 'book now');
      
        const bookingModal = document.getElementById("bookingModal");
        const closeBooking = document.getElementById("closeBooking");
        const bookingForm = document.getElementById("bookingForm");
        const successMsg = document.getElementById("bookingSuccessMsg");
      
        if (bookNowLink) {
          bookNowLink.addEventListener("click", function (e) {
            e.preventDefault();
            bookingModal.style.display = "flex";
            successMsg.style.display = "none";
          });
        }
      
        if (closeBooking) {
          closeBooking.addEventListener("click", function () {
            bookingModal.style.display = "none";
          });
        }
      
        window.addEventListener("click", function (e) {
          if (e.target === bookingModal) {
            bookingModal.style.display = "none";
          }
        });
      
        // Submit
        bookingForm.addEventListener("submit", function (e) {
          e.preventDefault();
      
          const service = document.getElementById("service").value;
          const date = document.getElementById("date").value;
      
          if (service && date) {
            successMsg.style.display = "block";           
          }
          setTimeout(() => {
            bookingModal.style.display = "none";
            successMsg.style.display = "none";
            bookingForm.reset();
          }, 2000);
        });
      });
      
  