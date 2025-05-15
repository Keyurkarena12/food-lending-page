
document.addEventListener('DOMContentLoaded', function () {
  const navlinks = document.querySelectorAll('.navbar .list ul li a');
  navlinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    })
  })

  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
  });
});

//---------home section in animation----------------
document.addEventListener('DOMContentLoaded', function () {
  const imgHeader = document.querySelector('.img-header');

  // Start position (bahar se)
  imgHeader.style.transform = 'translateX(500px)';
  imgHeader.style.opacity = '0';

  // Smooth transition
  imgHeader.style.transition = 'all 1s ease-out';

  // thoda delay karke andar lao
  setTimeout(() => {
    imgHeader.style.transform = 'translateX(0)';
    imgHeader.style.opacity = '1';
  }, 100); // 100ms delay
});

//------------------healthy section in animation-----------

document.addEventListener('DOMContentLoaded', function () {
  const healthyImg = document.querySelector('.healthy-img');

  // Starting position: thodi left me aur invisible
  healthyImg.style.transform = 'translateX(-300px)';
  healthyImg.style.opacity = '0';
  healthyImg.style.transition = 'all 1s ease-out';

  // Jab scroll ho to check kare
  window.addEventListener('scroll', function () {
    const imgPosition = healthyImg.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (imgPosition < screenHeight - 100) {
      healthyImg.style.transform = 'translateX(0)';
      healthyImg.style.opacity = '1';
    }
  });
});




//------------------card slide section ----------------


// Testimonial slider functionality
const testimonials = [
  {
    feedback: "FoodMan's culinary expertise never fails to impress! Every dish is a masterpiece, bursting with flavor and freshness.",
    name: "David Lee",
    role: "Business Executive",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    feedback: "Absolutely loved the service and the food quality! Highly recommend it to anyone looking for a memorable dining experience.",
    name: "Sophia Williams",
    role: "Food Blogger",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    feedback: "The ambiance and hospitality were top-notch. Would definitely visit again. Keep up the great work!",
    name: "Michael Brown",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/64.jpg"
  }
];

let current = 0;
const card = document.getElementById('testimonial-card');
const dotsContainer = document.getElementById('dots');

function showTestimonial(index) {
  const item = testimonials[index];
  card.innerHTML = `
                <p class="feedback">"${item.feedback}"</p>
                <img class="rounded-full" src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="role">${item.role}</p>
            `;
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function createDots() {
  testimonials.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      current = index;
      showTestimonial(current);
    });
    dotsContainer.appendChild(dot);
  });
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}

function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
}

// Mouse dragging functionality
let startX = 0;
let isDragging = false;

card.addEventListener('mousedown', (e) => {
  startX = e.clientX;
  isDragging = true;
  card.style.cursor = 'grabbing'; // Change cursor to grabbing on drag
});

card.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const currentX = e.clientX;
  const diffX = currentX - startX;

  // Threshold of 50px to detect a swipe
  if (diffX > 50) {
    prevTestimonial();
    isDragging = false;
  } else if (diffX < -50) {
    nextTestimonial();
    isDragging = false;
  }
});

card.addEventListener('mouseup', () => {
  isDragging = false;
  card.style.cursor = 'grab'; // Reset cursor after dragging
});

card.addEventListener('mouseleave', () => {
  isDragging = false;
  card.style.cursor = 'grab'; // Reset cursor if mouse leaves
});

// Touch support for mobile devices
card.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

card.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diffX = currentX - startX;

  if (diffX > 50) {
    prevTestimonial();
    isDragging = false;
  } else if (diffX < -50) {
    nextTestimonial();
    isDragging = false;
  }
});

card.addEventListener('touchend', () => {
  isDragging = false;
});

// Initialize the slider
createDots();
showTestimonial(current);

// Auto-slide every 5 seconds
// setInterval(nextTestimonial, 5000);



// //--------------chep animation--------------
// Page load hone ke baad
window.addEventListener('DOMContentLoaded', () => {
  const chefSection = document.getElementById('chef'); // chef section ko select karenge
  const chefImage = document.querySelector('.chef-image'); // chef image ko select karenge

  // Scroll event listener
  window.addEventListener('scroll', () => {
    // Chef section ke position ko check karte hain
    const chefPosition = chefSection.getBoundingClientRect();

    // Agar chef section viewport ke andar aa gaya ho (screen par ho)
    if (chefPosition.top <= window.innerHeight && chefPosition.bottom >= 0) {
      chefImage.style.transform = 'translateX(0)'; // image ko apni jagah par le aana
      chefImage.style.opacity = '1'; // image ko visible karna
    }
  });
});


// 


document.getElementById('menu-bar').addEventListener('click', function (e) {
  e.preventDefault();
  const navLinks = document.getElementById('nav-links-mobile');
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#nav-links-mobile a').forEach(link => {
  link.addEventListener('click', function () {
    document.getElementById('nav-links-mobile').classList.remove('active');
  });
});


// Testimonial slider functionality
