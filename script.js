const video = document.getElementById("heroVideo");

/* PLAY / PAUSE */
function toggleVideo() {
    if (video.paused) {
        video.muted = false;
        video.controls = true;
        video.play();
    } else {
        video.pause();
    }
}

/* MODAL */
function openModal() {
    document.getElementById("infoModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("infoModal").style.display = "none";
    document.body.style.overflow = "auto";
}

/* ESC KEY */
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});

/* 🔁 INFINITE AUTO SCROLL (BOTH SLIDERS) */
document.querySelectorAll(".infinite").forEach(row => {
    let speed = 1;

    setInterval(() => {
        row.scrollLeft += speed;

        if (row.scrollLeft >= row.scrollWidth / 2) {
            row.scrollLeft = 0;
        }
    }, 30);
});
