// // nextStep1 Button Sticky
// const btn = document.getElementById('sticky-btn');
// const stopPoint = document.getElementById('stop-point');

// function updateButtonPosition() {
//     const rect = stopPoint.getBoundingClientRect();
//     // console.log(rect);

//     if (rect.top <= window.innerHeight) {
//         btn.classList.add('stop');
//         btn.style.top = `${window.scrollY + rect.top - btn.offsetHeight + 20}px`;
//         btn.style.right = '20px';
//     } else {
//         btn.classList.remove('stop');
//         btn.style.top = '';
//     }
// }
// window.addEventListener('scroll', updateButtonPosition);

// // nextStep2 Button Sticky
// const stickyBtn = document.getElementById('sticky-btn2');
// const stopPoint2 = document.getElementById('stop-point2');

// function updateStickyPosition() {
//     const stopRect = stopPoint2.getBoundingClientRect();
//     const btnHeight = stickyBtn.offsetHeight;

//     if (stopRect.top <= window.innerHeight - btnHeight + 80) {
//         stickyBtn.classList.add('stopped');
//     } else {
//         stickyBtn.classList.remove('stopped');
//     }
// }

// window.addEventListener('scroll', updateStickyPosition);
// window.addEventListener('load', updateStickyPosition);

// // nextStep3 Button Sticky

// const stickyBtn3 = document.getElementById('sticky-btn3');
// const stopPoint3 = document.getElementById('stop-point3');

// function updateStickyButton3() {
//     const stopRect = stopPoint3.getBoundingClientRect();
//     const btnHeight = stickyBtn3.offsetHeight;

//     // Switch to "stopped" if the stop point is too close
//     if (stopRect.top <= window.innerHeight - btnHeight + 20) {
//         stickyBtn3.classList.add('stopped');
//     } else {
//         stickyBtn3.classList.remove('stopped');
//     }
// }

// window.addEventListener('scroll', updateStickyButton3);
// window.addEventListener('load', updateStickyButton3);

document.addEventListener("DOMContentLoaded", function () {
    // === Step 1 Sticky ===
    const stickyBtn1 = document.getElementById('sticky-btn');
    const stopPoint1 = document.getElementById('stop-point');

    function updateStickyButton1() {
        if (!stickyBtn1 || !stopPoint1) return;
        const rect = stopPoint1.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            stickyBtn1.classList.add('stop');
            stickyBtn1.style.top = `${window.scrollY + rect.top - stickyBtn1.offsetHeight + 20}px`;
        } else {
            stickyBtn1.classList.remove('stop');
            stickyBtn1.style.top = '';
        }
    }

    // === Step 2 Sticky ===
    const stickyBtn2 = document.getElementById('sticky-btn2');
    const stopPoint2 = document.getElementById('stop-point2');

    function updateStickyButton2() {
        if (!stickyBtn2 || !stopPoint2) return;
        const stopRect = stopPoint2.getBoundingClientRect();
        const btnHeight = stickyBtn2.offsetHeight;
        if (stopRect.top <= window.innerHeight - btnHeight + 80) {
            stickyBtn2.classList.add('stopped');
        } else {
            stickyBtn2.classList.remove('stopped');
        }
    }

    // === Step 3 Sticky ===
    const stickyBtn3 = document.getElementById('sticky-btn3');
    const stopPoint3 = document.getElementById('stop-point3');

    function updateStickyButton3() {
        if (!stickyBtn3 || !stopPoint3) return;
        const stopRect = stopPoint3.getBoundingClientRect();
        const btnHeight = stickyBtn3.offsetHeight;
        if (stopRect.top <= window.innerHeight - btnHeight + 20) {
            stickyBtn3.classList.add('stopped');
        } else {
            stickyBtn3.classList.remove('stopped');
        }
    }

    // === Update All Sticky Buttons ===
    function updateAllStickyButtons() {
        updateStickyButton1();
        updateStickyButton2();
        updateStickyButton3();
    }

    // === Scroll & Load Events ===
    window.addEventListener('scroll', updateAllStickyButtons);
    window.addEventListener('load', updateAllStickyButtons);

    // === Manually Trigger Sticky Check After Button Click ===
    const nextStepButtons = ['nextStep1', 'nextStep2', 'nextStep3', 'backStep2', 'backStep3'];
    nextStepButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                // Optional: scroll to next wrapper
                // Example: document.getElementById('step2-wrapper')?.scrollIntoView({ behavior: 'smooth' });

                // Re-check sticky buttons after scroll
                setTimeout(updateAllStickyButtons, 10);
            });
        }
    });
});
