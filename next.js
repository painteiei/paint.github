
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fireworks = [];

function drawFirework(x, y, color) {
    for (let i = 0; i < 100; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const speed = Math.random() * 5;
        const dx = Math.cos(angle) * speed;
        const dy = Math.sin(angle) * speed;

        fireworks.push({ x: x, y: y, dx: dx, dy: dy, color: color });
    }
}

function updateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((fw, index) => {
        fw.x += fw.dx;
        fw.y += fw.dy;
        fw.dy += 0.05;
        ctx.beginPath();
        ctx.arc(fw.x, fw.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = fw.color;
        ctx.fill();

        if (fw.y > canvas.height || fw.x < 0 || fw.x > canvas.width) {
            fireworks.splice(index, 1);
        }
    });
    requestAnimationFrame(updateFireworks);
}

setInterval(() => {
    drawFirework(
        Math.random() * canvas.width,
        Math.random() * canvas.height / 2,
        `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    );
}, 500);

updateFireworks();

const images = document.querySelectorAll('.imgfai img');

function checkVisibility() {
    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            img.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
