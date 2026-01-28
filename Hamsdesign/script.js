// --- Smooth Scroll ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// --- Filter Portofolio ---
const buttons = document.querySelectorAll('.filter-buttons button');
const items = document.querySelectorAll('.gallery .item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// --- Slider Karya Kami ---
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 1; // mulai dari slide pertama (setelah clone terakhir)
const slideCount = slides.length;

function showSlide(i) {
  slider.style.transform = `translateX(-${i * 100}%)`;
}

showSlide(index);

function nextSlide() {
  index++;
  slider.style.transition = "transform 0.6s ease";
  showSlide(index);

  if (index === slideCount - 1) {
    setTimeout(() => {
      slider.style.transition = "none";
      index = 1;
      showSlide(index);
    }, 600);
  }
}

function prevSlide() {
  index--;
  slider.style.transition = "transform 0.6s ease";
  showSlide(index);

  if (index === 0) {
    setTimeout(() => {
      slider.style.transition = "none";
      index = slideCount - 2;
      showSlide(index);
    }, 600);
  }
}

// Auto slide
setInterval(nextSlide, 2000);

// Tombol manual
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
