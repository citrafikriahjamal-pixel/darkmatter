// Ambil canvas
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

// Sesuaikan ukuran
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Buat bintang random
const stars = [];
for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 0.5 + 0.2
  });
}

// Gambar bintang
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

// Update posisi bintang
function updateStars() {
  stars.forEach(star => {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
}

// Loop animasi
function animate() {
  drawStars();
  updateStars();
  requestAnimationFrame(animate);
}
animate();

// Resize layar
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
