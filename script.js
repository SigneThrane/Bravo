document.addEventListener("touchstart", function(){}, true);

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})


const logos = document.querySelectorAll('.partner-logo');
let currentLogo = 0;

function showLogo(index) {
  logos.forEach((logo, i) => {
    if (i === index) {
      logo.style.display = 'block';
    } else {
      logo.style.display = 'none';
    }
  });
}

function nextLogo() {
  currentLogo = (currentLogo + 1) % logos.length;
  showLogo(currentLogo);
}

function prevLogo() {
  currentLogo = (currentLogo - 1 + logos.length) % logos.length;
  showLogo(currentLogo);
}

document.querySelector('.arrow-left').addEventListener('click', prevLogo);
document.querySelector('.arrow-right').addEventListener('click', nextLogo);
