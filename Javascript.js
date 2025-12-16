document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const button = form.querySelector("button");

  button.addEventListener("click", function (e) {
    e.preventDefault();

    const service = form.querySelector("select").value;
    const notes = form.querySelector("textarea").value.trim();
    const name = form.querySelector('input[placeholder="Full Name *"]').value.trim();
    const email = form.querySelector('input[placeholder="Email Address *"]').value.trim();
    const phone = form.querySelector('input[placeholder="Phone Number *"]').value.trim();
    const address = form.querySelector('input[placeholder="Address *"]').value.trim();

    // Validation
    if (!name || !email || !phone || !address) {
      alert("Please fill all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    // Success
    alert("Thank you! Your request has been submitted.");

    // Reset form
    form.reset();

  
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^[0-9]{10}$/.test(phone);
  }

  // Testomonials
  const wrapper = document.querySelector('.testimonials-wrapper');
  const dots = document.querySelectorAll('.testimonial-dots span');
  const cards = document.querySelectorAll('.testimonial-card');

  let index = 0;
  const cardWidth = 340 + 40; // card width + gap

  function slideTestimonials(i) {
    wrapper.style.transform = `translateX(-${i * cardWidth}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[i].classList.add('active');
  }

  // Auto slide
  setInterval(() => {
    index = (index + 1) % cards.length;
    slideTestimonials(index);
  }, 4000);

  // Dot click
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      slideTestimonials(index);
    });
  });

///FAQ
 const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector("h4");

    question.addEventListener("click", () => {
      // Close all other FAQs
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
          other.querySelector("span").textContent = "+";
        }
      });

      // Toggle current FAQ
      item.classList.toggle("active");

      // Change + / -
      const icon = item.querySelector("span");
      icon.textContent = item.classList.contains("active") ? "−" : "+";
    });
  });
  //nav bar
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const dropdown = document.querySelector(".dropdown");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  dropdown.querySelector(".drop-btn").addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      dropdown.classList.toggle("active");
    }
  });



});
