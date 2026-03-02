const textarea = document.getElementById("comment");
const postBtn = document.querySelector(".tweet-btn-small");
const tweetText = document.querySelector(".tweet-text");
const preloader = document.getElementById("preloader");

// cái này là ở chỗ input
textarea.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});

textarea.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    postBtn.disabled = false;
  } else {
    postBtn.disabled = true;
  }
});

// Làm cái chữ nhảy
const fullText = tweetText.textContent;

tweetText.textContent = "";

let charIndex = 0;
const typingSpeed = 67;

function typeWriter() {
  if (charIndex < fullText.length) {
    tweetText.textContent += fullText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  }
}
typeWriter();

// Làm cái chỗ Preloader
window.addEventListener("load", function () {
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }, 3000);
});
