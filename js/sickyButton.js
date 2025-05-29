// nextStep1 Button Sticky
const btn = document.getElementById('sticky-btn');
const stopPoint = document.getElementById('stop-point');

function updateButtonPosition() {
    const rect = stopPoint.getBoundingClientRect();
    // console.log(rect);

    if (rect.top <= window.innerHeight) {
        btn.classList.add('stop');
        btn.style.top = `${window.scrollY + rect.top - btn.offsetHeight + 20}px`;
        btn.style.right = '20px';
    } else {
        btn.classList.remove('stop');
        btn.style.top = '';
    }
}
window.addEventListener('scroll', updateButtonPosition);

// nextStep2 Button Sticky
const stickyBtn = document.getElementById('sticky-btn2');
const stopPoint2 = document.getElementById('stop-point2');

function updateStickyPosition() {
    const stopRect = stopPoint2.getBoundingClientRect();
    const btnHeight = stickyBtn.offsetHeight;

    if (stopRect.top <= window.innerHeight - btnHeight + 80) {
        stickyBtn.classList.add('stopped');
    } else {
        stickyBtn.classList.remove('stopped');
    }
}

window.addEventListener('scroll', updateStickyPosition);
window.addEventListener('load', updateStickyPosition);

// nextStep3 Button Sticky

const stickyBtn3 = document.getElementById('sticky-btn3');
const stopPoint3 = document.getElementById('stop-point3');

function updateStickyButton3() {
    const stopRect = stopPoint3.getBoundingClientRect();
    const btnHeight = stickyBtn3.offsetHeight;

    // Switch to "stopped" if the stop point is too close
    if (stopRect.top <= window.innerHeight - btnHeight + 20) {
        stickyBtn3.classList.add('stopped');
    } else {
        stickyBtn3.classList.remove('stopped');
    }
}

window.addEventListener('scroll', updateStickyButton3);
window.addEventListener('load', updateStickyButton3);
