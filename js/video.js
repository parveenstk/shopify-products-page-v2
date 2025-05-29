// what is hidden hunger video ( play & pause )

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");
    const icon = document.getElementById("playPauseIcon");

    function togglePlayPause() {
        if (video && icon) {
            if (video.paused) {
                video.play();
                icon.src = "images/pluse.png";
            } else {
                video.pause();
                icon.src = "images/play.webp";
            }
        }
    }

    if (video && icon) {
        video.addEventListener("play", () => {
            icon.src = "images/pluse.png";
        });

        video.addEventListener("pause", () => {
            icon.src = "images/play.webp";
        });

        // Optional: expose globally if you're using inline onclick
        window.togglePlayPause = togglePlayPause;
    }
});