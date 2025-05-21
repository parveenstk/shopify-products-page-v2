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

// offer - 01
const nextStep1 = document.getElementById('nextStep1');
const offerOne = document.getElementById('offer-one');

// offer - 02
const nextStep2 = document.getElementById('nextStep2');
const backStep2 = document.getElementById('backStep2');
const offerTwo = document.getElementById('offer-two');
const boxBorder2 = document.getElementById('offer2-boxBorder');
const boxHeader2 = document.getElementById('offer2-boxHeader');
const saveText2 = document.getElementById('offer2-saveText');
const offer2Opt1 = document.getElementById('offer2-opt1');
const offer2Month = document.getElementById('offer2-month');

// offer - 03
const nextStep3 = document.getElementById('nextStep3');
const backStep3 = document.getElementById('backStep3');
const offerThree = document.getElementById('offer-three');
const boxBorder3 = document.getElementById('offer3-boxBorder');
const saveText3 = document.getElementById('offer3-saveText');

const handleCheckboxClick = (clicked) => {
    // console.log("clicked:", clicked.value);

    if (clicked.value === 'yomzSours') {
        // Show sour
        nextStep1.classList.add('buttonGreen');
        nextStep2.classList.add('buttonGreen');
        nextStep3.classList.add('buttonGreen');
        boxHeader2.classList.add('buttonGreen');
        boxBorder2.classList.add('borderGreenBox');
        offer2Opt1.classList.add('borderGreenBox');
        saveText2.classList.add('fontGreen');
        offer2Month.classList.add('buttonGreen');

        boxBorder3.classList.add('borderGreenBox');
        saveText3.classList.add('fontGreen');

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
        boxHeader2.classList.remove('buttonGreen');
        boxBorder2.classList.remove('borderGreenBox');
        offer2Opt1.classList.remove('borderGreenBox');
        saveText2.classList.remove('fontGreen');
        offer2Month.classList.remove('buttonGreen');
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