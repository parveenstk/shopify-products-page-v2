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
