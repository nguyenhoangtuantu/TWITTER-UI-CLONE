const textarea = document.getElementById("comment");
const postBtn = document.querySelector(".tweet-btn-small");
const tweetText = document.querySelector(".tweet-text");

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
