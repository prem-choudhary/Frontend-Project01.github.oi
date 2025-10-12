const feed = document.getElementById("feed");
const postBtn = document.getElementById("post-btn");
const imageUpload = document.getElementById("image-upload");
const captionInput = document.getElementById("caption");
const usernameInput = document.getElementById("username");
const themeToggle = document.getElementById("theme-toggle");

fetch("https://picsum.photos/v2/list?page=2&limit=4")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((photo) =>
      createPost(photo.download_url, "Guest", "Enjoying the moment!")
    )
  )
  .catch((err) => console.error("Error loading posts:", err));

function createPost(imageURL, username, caption) {
  const post = document.createElement("div");
  post.className = "post";

  const postId = Date.now();

  post.innerHTML = `
    <div class="info">@${username}</div>
    <img src="${imageURL}" alt="Post image">
    <div class="caption">${caption}</div>
    <div class="actions">
      <button class="like-btn">❤️</button>
      <button class="share-btn">📤</button>
    </div>
    <div class="likes" id="likes-${postId}">${getLikes(postId)} likes</div>
    <div class="comments" id="comments-${postId}">
      <div class="comment-box">
        <input type="text" placeholder="Add a comment..." />
        <button class="send-btn">💬</button>
      </div>
    </div>
  `;
  feed.prepend(post);

  const likeBtn = post.querySelector(".like-btn");
  const likesDisplay = post.querySelector(`#likes-${postId}`);

  // Like feature
  likeBtn.addEventListener("click", () => {
    let likes = getLikes(postId) + 1;
    saveLikes(postId, likes);
    likesDisplay.textContent = `${likes} likes`;
  });

  // Share
  const shareBtn = post.querySelector(".share-btn");
  shareBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(imageURL);
    alert("Post link copied!");
  });

  // Comment
  const sendBtn = post.querySelector(".send-btn");
  const commentInput = post.querySelector(".comment-box input");
  const commentsContainer = post.querySelector(`#comments-${postId}`);

  sendBtn.addEventListener("click", () => {
    const comment = commentInput.value.trim();
    if (comment) {
      const p = document.createElement("p");
      p.textContent = `💬 ${comment}`;
      commentsContainer.insertBefore(p, post.querySelector(".comment-box"));
      commentInput.value = "";
    }
  });
}

// Handle post creation by user
postBtn.addEventListener("click", () => {
  const username = usernameInput.value || "Anonymous";
  const caption = captionInput.value || "No caption";
  const file = imageUpload.files[0];

  if (!file) {
    alert("Please upload an image");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    createPost(reader.result, username, caption);
    usernameInput.value = "";
    captionInput.value = "";
    imageUpload.value = "";
  };
  reader.readAsDataURL(file);
});

// Like persistence
function getLikes(id) {
  return parseInt(localStorage.getItem(`likes_${id}`)) || 0;
}

function saveLikes(id, count) {
  localStorage.setItem(`likes_${id}`, count);
}

// Dark Mode Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});
