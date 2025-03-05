// Smooth scrolling for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initialize AOS (Animate On Scroll) library
  AOS.init({
    duration: 1000,
    once: true,
  });

  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.querySelector("input[name='name']").value.trim();
  let email = document.querySelector("input[name='email']").value.trim();
  let message = document.querySelector("textarea[name='message']").value.trim();
  let formStatus = document.getElementById("form-status");

  if (name === "" || email === "" || message === "") {
      formStatus.innerText = "Please fill out all fields!";
      formStatus.style.color = "red";
      return;
  }

  formStatus.innerText = "Message sent! I'll get back to you soon.";
  formStatus.style.color = "green";

  // Simulate form reset after 2 seconds
  setTimeout(() => {
      document.getElementById("contact-form").reset();
      formStatus.innerText = "";
  }, 2000);
});
