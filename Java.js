// Theme toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// BLOG DATA
const blogPosts = [
  { title: "Classroom Management", category: "Teaching" },
  { title: "Writing Skills", category: "ELT" }
];

function renderBlogs() {
  const container = document.getElementById("blogContainer");
  if (!container) return;

  container.innerHTML = blogPosts.map(p =>
    `<div><h3>${p.title}</h3><small>${p.category}</small></div>`
  ).join("");
}

// VIDEOS
const videos = [
  { id: "dQw4w9WgXcQ", title: "Lesson 1" }
];

function renderVideos() {
  const container = document.getElementById("videoContainer");

  container.innerHTML = videos.map(v =>
    `<iframe width="100%" height="200"
      src="https://www.youtube.com/embed/${v.id}">
    </iframe>`
  ).join("");
}

renderBlogs();
renderVideos();