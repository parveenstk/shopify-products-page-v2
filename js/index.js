// Yomz Carousels
const yomzProduct = document.getElementById('yomz-original-carousel');
const soursProduct = document.getElementById('yomz-sours-carousel');

// Yomz buttons
const originalButton = document.getElementById('original-Button');
const soursButton = document.getElementById('sours-Button');
const checkOriginal = document.getElementById('checkOriginal');
const checkSour = document.getElementById('checkSour');

// Next Step Function (showing next & back step)
const yomzOriginal = document.getElementById('yomz-original');
const yomzSours = document.getElementById('yomz-sours');

const nextStep1 = document.getElementById('nextStep1');
const nextStep2 = document.getElementById('nextStep2');
const nextStep3 = document.getElementById('nextStep3');
const backStep2 = document.getElementById('backStep2');
const backStep3 = document.getElementById('backStep3');
const offerOne = document.getElementById('offer-one');
const offerTwo = document.getElementById('offer-two');
const offerThree = document.getElementById('offer-three');

const handleCheckboxClick = (clicked) => {
    console.log("clicked:", clicked.value);

    if (clicked.value === 'yomzSours') {
        // Show sour
        nextStep1.classList.add('buttonGreen');
        nextStep2.classList.add('buttonGreen');
        nextStep3.classList.add('buttonGreen');
        checkOriginal.style.accentColor = 'black';
        originalButton.classList.remove('borderBlue');
        soursButton.classList.add('borderGreen');
        soursProduct.classList.remove('hide');
        soursProduct.classList.add('show');
        yomzProduct.classList.add('hide');

        // Refresh Swiper instance
        if (swiperInstances['yomz-sours-carousel']) {
            const { productSlider, productThumbs } = swiperInstances['yomz-sours-carousel'];
            productSlider.update();
            productThumbs.update();
        }
    } else if (clicked.value === 'yomzOriginal') {
        // Show original
        nextStep1.classList.remove('buttonGreen');
        nextStep2.classList.remove('buttonGreen');
        nextStep3.classList.remove('buttonGreen');
        checkSour.style.accentColor = 'green';
        soursButton.classList.remove('borderGreen');
        originalButton.classList.add('borderBlue');
        yomzProduct.classList.remove('hide');
        yomzProduct.classList.add('show');
        soursProduct.classList.add('hide');

        // Refresh Swiper instance
        if (swiperInstances['yomz-original-carousel']) {
            const { productSlider, productThumbs } = swiperInstances['yomz-original-carousel'];
            productSlider.update();
            productThumbs.update();
        }
    }

    // Uncheck other checkboxes
    const checkboxes = document.querySelectorAll('input[name="productType"]');
    checkboxes.forEach(cb => {
        if (cb !== clicked) cb.checked = false;
    });
};

// console.log(offerTwo);

nextStep1.addEventListener('click', () => {
    offerTwo.classList.remove('hide');
    offerOne.classList.add('hide');
})

nextStep2.addEventListener('click', () => {
    offerThree.classList.remove('hide');
    offerTwo.classList.add('hide');

})

backStep2.addEventListener('click', () => {
    offerTwo.classList.add('hide');
    offerOne.classList.remove('hide');
    offerOne.classList.add('show');
})

backStep3.addEventListener('click', () => {
    offerThree.classList.add('hide');
    offerTwo.classList.add('show');
    offerTwo.classList.remove('hide');
})