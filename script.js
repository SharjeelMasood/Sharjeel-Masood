// Mobile menu toggle
function toggleMenu() {
  document.getElementById("navbarMenu").classList.toggle("show");
}

// Active menu (perfect fix)
const currentPage =
  window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar li a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.parentElement.classList.add("active");
  }
});
const textArraySharjeel = [
  "Sharjeel Masood",
  "Frontend Developer",
  "WordPress Developer",
  "Web Designer"
];

const typingElementSharjeel = document.getElementById('typing-effect-sharjeel');
let textIndexSharjeel = 0;
let charIndexSharjeel = 0;

function typeSharjeel() {
  if (charIndexSharjeel < textArraySharjeel[textIndexSharjeel].length) {
    typingElementSharjeel.textContent +=
      textArraySharjeel[textIndexSharjeel].charAt(charIndexSharjeel);
    charIndexSharjeel++;
    setTimeout(typeSharjeel, 100);
  } else {
    setTimeout(eraseSharjeel, 1500);
  }
}

function eraseSharjeel() {
  if (charIndexSharjeel > 0) {
    typingElementSharjeel.textContent =
      textArraySharjeel[textIndexSharjeel].substring(0, charIndexSharjeel - 1);
    charIndexSharjeel--;
    setTimeout(eraseSharjeel, 50);
  } else {
    textIndexSharjeel++;
    if (textIndexSharjeel >= textArraySharjeel.length) {
      textIndexSharjeel = 0;
    }
    setTimeout(typeSharjeel, 500);
  }
}

if (typingElementSharjeel) {
  typeSharjeel();
}

// Fade up on scroll (About image)
const aboutImg = document.querySelector(".aboutimg img");

window.addEventListener("scroll", () => {
  const imgPosition = aboutImg.getBoundingClientRect().top;
  const screenPosition = window.innerHeight - 100;

  if (imgPosition < screenPosition) {
    aboutImg.classList.add("fade-up");
  }
});
// Fade left for About text
const aboutText = document.querySelectorAll(".abouttext h1, .abouttext p");

window.addEventListener("scroll", () => {
  aboutText.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight - 100;

    if (position < screen) {
      el.classList.add("fade-left");
    }
  });
});
// Fade up animation for buttons
const buttons = document.querySelectorAll(".btn");

window.addEventListener("scroll", () => {
  buttons.forEach(btn => {
    const position = btn.getBoundingClientRect().top;
    const screen = window.innerHeight - 80;

    if (position < screen) {
      btn.classList.add("fade-up");
    }
  });
});

// Select all service boxes
const boxes = document.querySelectorAll('.service-box');

function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.85;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('visible'); // fade-up animation start
    }
  });
}

window.addEventListener('scroll', checkBoxes);
window.addEventListener('load', checkBoxes); // page load par bhi trigger
 
  const projectBoxes = document.querySelectorAll('.project-box');

  function checkProjects() {
    const triggerBottom = window.innerHeight * 0.85;

    projectBoxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkProjects);
  window.addEventListener('load', checkProjects);
 
// blog section
// Fade-up animation
const blogPosts = document.querySelectorAll('.blog-post');
function checkBlogs() {
  const triggerBottom = window.innerHeight * 0.85;
  blogPosts.forEach(post => {
    if (post.getBoundingClientRect().top < triggerBottom) {
      post.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkBlogs);
window.addEventListener('load', checkBlogs);

// Set published date
document.querySelectorAll('.post-date').forEach(span=>{
  span.textContent = "Published on " + new Date().toLocaleDateString();
});

// Like button - single like per device
document.querySelectorAll('.like-btn').forEach((btn, index)=>{
  const postId = "blogLike_"+index;
  const storedCount = localStorage.getItem(postId);
  if(storedCount){
    btn.classList.add('liked');
    btn.querySelector('.like-count').textContent = storedCount;
    btn.disabled = true;
  }

  btn.addEventListener('click', ()=>{
    if(!localStorage.getItem(postId)){
      let count = parseInt(btn.querySelector('.like-count').textContent);
      count++;
      btn.querySelector('.like-count').textContent = count;
      btn.classList.add('liked');
      btn.disabled = true;
      localStorage.setItem(postId, count);
    }
  });
});

// Comment toggle
document.querySelectorAll('.comment-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const section = btn.closest('.blog-post').querySelector('.comment-section');
    section.style.display = section.style.display==='block'?'none':'block';
  });
});

// Add comment with reply + Read More
document.querySelectorAll('.add-comment-btn').forEach((btn,index)=>{
  const section = btn.closest('.comment-section');
  const nameInput = section.querySelector('.comment-name');
  const commentInput = section.querySelector('.comment-input');
  const list = section.querySelector('.comments-list');
  const wrapper = section.querySelector('.comments-list-wrapper');
  const readBtn = section.querySelector('.read-more-btn');

  btn.addEventListener('click', ()=>{
    if(nameInput.value.trim()!=='' && commentInput.value.trim()!==''){
      const p = document.createElement('p');
      p.innerHTML = `<strong>${nameInput.value}:</strong> ${commentInput.value} <button class="reply-btn">Reply</button>`;
      list.appendChild(p);
      nameInput.value = '';
      commentInput.value = '';

      if(list.children.length > 3) readBtn.style.display='inline';

      const replyBtn = p.querySelector('.reply-btn');
      const replyInput = document.createElement('input');
      replyInput.type='text'; replyInput.placeholder='Write a reply...';
      replyInput.style.display='none'; replyInput.style.marginLeft='20px'; replyInput.style.marginTop='5px'; replyInput.style.width='70%';
      const replyAddBtn = document.createElement('button'); replyAddBtn.textContent='Add';
      replyAddBtn.style.display='none'; replyAddBtn.style.marginLeft='5px'; replyAddBtn.style.cursor='pointer';
      p.appendChild(replyInput); p.appendChild(replyAddBtn);

      replyBtn.addEventListener('click', ()=>{
        replyInput.style.display = replyInput.style.display==='none'?'inline-block':'none';
        replyAddBtn.style.display = replyAddBtn.style.display==='none'?'inline-block':'none';
      });

      replyAddBtn.addEventListener('click', ()=>{
        if(replyInput.value.trim()!==''){
          const replyP = document.createElement('p');
          replyP.innerHTML = `<strong>Reply:</strong> ${replyInput.value}`;
          replyP.style.marginLeft='40px';
          list.insertBefore(replyP, p.nextSibling);
          replyInput.value='';
        }
      });
    }
  });

  readBtn.addEventListener('click', ()=>{
    wrapper.classList.toggle('expanded');
    readBtn.textContent = wrapper.classList.contains('expanded')?'Show Less ←':'Read More Comments →';
  });
});

// Testimonial section

const testimonials = document.querySelectorAll('.testimonial-box');

function showTestimonials() {
  const trigger = window.innerHeight * 0.85;
  testimonials.forEach(box => {
    if (box.getBoundingClientRect().top < trigger) {
      box.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showTestimonials);
window.addEventListener('load', showTestimonials);
// Contact Section
window.addEventListener("load",()=>{
  document.querySelector(".contact-cta").classList.add("visible");
});
// footer

// Auto year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal animation
window.addEventListener("load",()=>{
  document.querySelector(".footer-top").classList.add("visible");
});
const scrollTopBtn = document.getElementById('scrollTop');

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// About page sectin
document.addEventListener("DOMContentLoaded", () => {
  // Intro section
  const introTitle = document.getElementById("introTitle");
  const introPara = document.getElementById("introPara");
  const introCvBtn = document.getElementById("introCvBtn");
  const introImg = document.getElementById("introImg");

  if (introTitle) introTitle.classList.add("show");
  if (introPara) setTimeout(() => introPara.classList.add("show"), 200);
  if (introCvBtn) setTimeout(() => introCvBtn.classList.add("show"), 400);
  if (introImg) setTimeout(() => introImg.classList.add("show"), 600);

  // Scroll reveal
  const items = document.querySelectorAll(".reveal");
  if (items.length > 0) {
    window.addEventListener("scroll", () => {
      items.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 120) {
          el.classList.add("show");
        }
      });
    });
  }
}); 
//Project page
