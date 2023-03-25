// Navbar
const menu = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  navList.classList.toggle("change");
});

navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log(e.target);
    navList.classList.toggle("change");
  });
});


// Carousel
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".carousel-wrapper i");

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 12; 
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});


// Services
const serviceDesc = document.querySelectorAll(".service-desc");

serviceDesc.forEach(desc => {
    desc.textContent = desc.textContent.substring(0, 75) + "...";
});


// Notification
const notification = document.querySelector(".notification");
const form = document.querySelector("#contact form");
const inputs = document.querySelectorAll(".form-control");
const closeBtn = document.querySelector(".close");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Hello");

  inputs.forEach(input => {
    input.value = "";
  });

  notification.style.display = "flex";
  setTimeout(()=>{
    notification.style.display = "none";
  }, 4000);
});

closeBtn.addEventListener("click", () => {
  notification.style.display = "none";
});