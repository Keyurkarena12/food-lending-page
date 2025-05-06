
document.addEventListener('DOMContentLoaded', function() {
    const navlinks = document.querySelectorAll('.navbar .list ul li a');
    navlinks.forEach(function(link){
      link.addEventListener('click', function(event){
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
    
    });
    //---------home section in animation----------------
    document.addEventListener('DOMContentLoaded', function() {
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
    
    document.addEventListener('DOMContentLoaded', function() {
        const healthyImg = document.querySelector('.healthy-img');
    
        // Starting position: thodi left me aur invisible
        healthyImg.style.transform = 'translateX(-300px)';
        healthyImg.style.opacity = '0';
        healthyImg.style.transition = 'all 1s ease-out';
    
        // Jab scroll ho to check kare
        window.addEventListener('scroll', function() {
            const imgPosition = healthyImg.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
    
            if (imgPosition < screenHeight - 100) {
                healthyImg.style.transform = 'translateX(0)';
                healthyImg.style.opacity = '1';
            }
        });
    });
    
    
    
    
    //------------------card slide section ----------------
      
    // const testimonials = [
    //   {
    //     feedback: "FoodMan's culinary expertise never fails to impress! Every dish is a masterpiece, bursting with flavor and freshness.",
    //     name: "David Lee",
    //     role: "Business Executive",
    //     image: "https://randomuser.me/api/portraits/men/32.jpg"
    //   },
    //   {
    //     feedback: "Absolutely loved the service and the food quality! Highly recommend it to anyone looking for a memorable dining experience.",
    //     name: "Sophia Williams",
    //     role: "Food Blogger",
    //     image: "https://randomuser.me/api/portraits/women/44.jpg"
    //   },
    //   {
    //     feedback: "The ambiance and hospitality were top-notch. Would definitely visit again. Keep up the great work!",
    //     name: "Michael Brown",
    //     role: "Entrepreneur",
    //     image: "https://randomuser.me/api/portraits/men/64.jpg"
    //   }
    // ];
    
    // // Pehle testimonial 0 (first) wala dikhana hai
    // let current = 0;
    
    // // Page se elements uthane
    // const card = document.getElementById('testimonial-card');
    // const dotsContainer = document.getElementById('dots');
    
    // // Ek function jo ek testimonial show kare
    // function showTestimonial(index) {
    //   const item = testimonials[index]; // ek testimonial ka data
    
    //   // Card ke andar HTML bhar do
    //   card.innerHTML = `
    //     <p class="feedback">"${item.feedback}"</p>
    //     <img src="${item.image}" alt="${item.name}">
    //     <h3>${item.name}</h3>
    //     <p class="role">${item.role}</p>
    //   `;
    
    //   // Dot update karna (active dot highlight)
    //   const dots = document.querySelectorAll('.dot');
    //   dots.forEach(dot => dot.classList.remove('active')); // sab dots se active hatao
    //   dots[index].classList.add('active'); // current wale dot pe active class lagao
    // }
    
    // // Sare dots banana
    // function createDots() {
    //   testimonials.forEach((_, index) => {
    //     const dot = document.createElement('span');
    //     dot.classList.add('dot');
    //     dot.addEventListener('click', () => {
    //       current = index; // jis dot pe click hua, usko current bana do
    //       showTestimonial(current); // aur testimonial show karo
    //     });
    //     dotsContainer.appendChild(dot); // dot ko dots ke container me daal do
    //   });
    // }
    
    // // Swipe aur Trackpad ke liye cheeze
    // let startX = 0; // starting point store
    // let isDragging = false;
    
    
    
    // // Trackpad ke liye 2-finger swipe detect
    // card.addEventListener('wheel', (e) => {
    //   if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) { // Sirf horizontal scroll dekhna hai
    //     if (e.deltaX > 30) {
    //       nextTestimonial(); // right swipe
    //     } else if (e.deltaX < -30) {
    //       prevTestimonial(); // left swipe
    //     }
    //   }
    // });
    
    
    
    // // Next testimonial dikhane ka function
    // function nextTestimonial() {
    //   current = (current + 1) % testimonials.length;
    //   showTestimonial(current);
    // }
    
    // // Previous testimonial dikhane ka function
    // function prevTestimonial() {
    //   current = (current - 1 + testimonials.length) % testimonials.length;
    //   showTestimonial(current);
    // }
    
    // // Page load hote hi dots banao aur first testimonial dikhayo
    // createDots();
    // showTestimonial(current);
    
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
        <img src="${item.image}" alt="${item.name}">
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
    
    // Existing trackpad scroll functionality
    // card.addEventListener('wheel', (e) => {
    //   if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
    //     if (e.deltaX > 30) {
    //       nextTestimonial();
    //     } else if (e.deltaX < -30) {
    //       prevTestimonial();
    //     }
    //   }
    // });
    
    createDots();
    showTestimonial(current);
    
    
    
    
    
    
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
    
    
    
    
    