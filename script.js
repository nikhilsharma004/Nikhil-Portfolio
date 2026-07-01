const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const spotlight = document.querySelector(".spotlight");
const year = document.querySelector("#year");
const typedRole = document.querySelector("#typed-role");
const canvas = document.querySelector("#grain-field");
const ctx = canvas.getContext("2d");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const submitButton = contactForm.querySelector("button[type='submit']");

  formStatus.textContent = "Sending your message...";
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Message could not be sent.");
    }

    contactForm.reset();
    formStatus.textContent = "Message sent successfully. Thank you!";
  } catch (error) {
    formStatus.textContent = "Message could not be sent. Please email me directly at nikhilsharma3492@gmail.com.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit Message";
  }
});

window.addEventListener("pointermove", (event) => {
  spotlight.style.setProperty("--x", `${event.clientX}px`);
  spotlight.style.setProperty("--y", `${event.clientY}px`);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sections = [...document.querySelectorAll("main section[id]")];
const navItems = [...document.querySelectorAll(".nav-links a")];
const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navItems.forEach((item) => {
        item.classList.toggle("active", item.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => activeObserver.observe(section));

const words = ["Java", "OOP", "DSA", "JavaScript", "modern UI"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = words[wordIndex];
  typedRole.textContent = current.slice(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex += 1;
  } else if (deleting && charIndex > 0) {
    charIndex -= 1;
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeLoop, 900);
    return;
  } else {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeLoop, deleting ? 48 : 88);
}

typeLoop();

document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${y * -6}deg) rotateY(${x * 7}deg) translateY(-4px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

let particles = [];
let width = 0;
let height = 0;
let pixelRatio = 1;

function resizeCanvas() {
  pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  const count = Math.min(90, Math.max(34, Math.floor(width / 18)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.38,
    vy: (Math.random() - 0.5) * 0.38,
    r: Math.random() * 1.8 + 0.6
  }));
}

function animateParticles() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach((particle, index) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > height) particle.vy *= -1;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(61, 245, 255, 0.34)";
    ctx.fill();

    for (let next = index + 1; next < particles.length; next += 1) {
      const other = particles[next];
      const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
      if (distance < 110) {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(other.x, other.y);
        ctx.strokeStyle = `rgba(163, 255, 114, ${0.12 - distance / 1180})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(animateParticles);
}

resizeCanvas();
animateParticles();
window.addEventListener("resize", resizeCanvas);
