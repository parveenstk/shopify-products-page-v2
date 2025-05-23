// Yomz Carousels
const yomzProduct = document.getElementById('yomz-original-carousel');
const soursProduct = document.getElementById('yomz-sours-carousel');

// Yomz buttons
const originalButton = document.getElementById('original-Button');
const soursButton = document.getElementById('sours-Button');
const checkOriginal = document.getElementById('checkOriginal');
const checkSour = document.getElementById('checkSour');

// Gummies Buttons (yomz Original & yomz Sour)
const yomzOriginal = document.getElementById('yomz-original');
const yomzSours = document.getElementById('yomz-sours');

// offer - 01
const nextStep1 = document.getElementById('nextStep1');
const offerOne = document.getElementById('offer-one');
const productDesc = document.getElementById('prod-Description');

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

// faqs ( yomz original & yomz sours )
const faqOriginal1 = document.getElementById('faq-yomzOriginal-1');
const faqOriginal2 = document.getElementById('faq-yomzOriginal-2');
const faqSours1 = document.getElementById('faq-yomzSours-1');
const faqSours2 = document.getElementById('faq-yomzSours-2');

// inputs of all offer pages
const checkInput1 = document.getElementById('checkBox-input1');
const checkInput2 = document.getElementById('checkBox-input2');
const checkInput3 = document.getElementById('checkBox-input3');
const checkInput4 = document.getElementById('checkBox-input4');

// console.log("checkInput4:", checkInput4);

// product price 
const productPrice = document.getElementById('product-price');

const handleCheckboxClick = (clicked) => {

    if (clicked.value === 'yomzSours') {

        localStorage.setItem('colorSchema', JSON.stringify('Green'));

        // change backgrounds
        const backgrounds = [nextStep1, nextStep2, nextStep3, boxHeader2, offer2Month];
        backgrounds.forEach(el => addCls(el, 'bg-Green'));

        // change borders
        const borders = [boxBorder2, boxBorder3];
        borders.forEach(el => addCls(el, 'borderGreenBox'));

        // change fonts 
        const fonts = [saveText2, saveText3];
        fonts.forEach(el => addCls(el, 'fontGreen'));

        // faq section mobile
        remvoeCls(faqOriginal2, 'show2');
        addCls(faqSours2, 'show2');

        // products
        productDesc.innerHTML = '<p id="prod-Description" class="text-center mt-3 simp-font">Flavor:<br>Peachy, Strawbeary</p>'
        productPrice.innerHTML = '<span id="product-price" class="tab-price">$XX.22</span>'

        // Inputs
        const inputs = [checkInput1, checkInput2, checkInput3, checkInput4]
        inputs.forEach(input => addCls(input, 'inputBorderGreen'));

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

        // for best value selectors
        const bestValueSelectors = document.querySelectorAll('.slt-bag-item .card');
        bestValueSelectors.forEach((selector) => {
            selector.classList.replace('borderBlueOffer2', 'borderGreenOffer2')
        })
    } else if (clicked.value === 'yomzOriginal') {

        localStorage.setItem('colorSchema', JSON.stringify('Blue'));

        // change backgrounds
        const backgrounds = [nextStep1, nextStep2, nextStep3, boxHeader2];
        backgrounds.forEach(el => remvoeCls(el, 'bg-Green'));

        // change borders
        const borders = [boxBorder2, offer2Opt1, boxBorder3];
        borders.forEach(el => remvoeCls(el, 'borderGreenBox'))

        saveText2.classList.remove('fontGreen');

        // change Inputs
        const inputs = [checkInput1, checkInput2, checkInput3, checkInput4]
        inputs.forEach(input => remvoeCls(input, 'inputBorderGreen'));

        // faq section mobile
        remvoeCls(faqSours2, 'show2');
        addCls(faqOriginal2, 'show2');

        // product description
        productDesc.innerHTML = '<p id="prod-Description" class="text-center mt-3 simp-font">Flavor:<br>Peachy, Strawbeary, Beary Berry</p>'
        productPrice.innerHTML = '<span id="product-price" class="tab-price">$XX.99</span>'

        offer2Month.classList.remove('bg-Green');
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

        // for best value selectors
        const bestValueSelectors = document.querySelectorAll('.slt-bag-item .card');
        bestValueSelectors.forEach((selector) => {
            selector.classList.replace('borderGreenOffer2', 'borderBlueOffer2')
        })
    }

    // Uncheck other checkboxes
    const checkboxes = document.querySelectorAll('input[name="productType"]');
    checkboxes.forEach(cb => {
        if (cb !== clicked) cb.checked = false;
    });
};

// console.log(offerTwo);

// Stepper ( bar & circle )
const circle1 = document.getElementById('step1-circle');
const bar1 = document.getElementById('step1-bar');
const circle2 = document.getElementById('step2-circle');
const bar2 = document.getElementById('step2-bar');
const circle3 = document.getElementById('step3-circle');

// to move next1 to next2
nextStep1.addEventListener('click', () => {
    offerTwo.classList.remove('hide');
    offerOne.classList.add('hide');
    replaceCls(circle1, 'active', 'completed');
    replaceCls(bar1, 'bar', 'compltedBar');
    replaceCls(circle2, 'circle', 'circleActive');
})

// to move next2 to next3
nextStep2.addEventListener('click', () => {
    offerThree.classList.remove('hide');
    offerTwo.classList.add('hide');
    replaceCls(circle2, 'circleActive', 'circleCompleted');
    replaceCls(bar2, 'bar', 'compltedBar');
    replaceCls(circle3, 'circle', 'circleActive');
})

// to backward backButton-2 to step1
backStep2.addEventListener('click', () => {
    offerTwo.classList.add('hide');
    offerOne.classList.remove('hide');
    offerOne.classList.add('show');
    replaceCls(circle2, 'circleActive', 'circle');
    replaceCls(bar1, 'compltedBar', 'bar');
    replaceCls(circle1, 'completed', 'active');
})

// to backward backButton - 3 to backButton - 2
backStep3.addEventListener('click', () => {
    offerThree.classList.add('hide');
    offerTwo.classList.add('show');
    offerTwo.classList.remove('hide');
    replaceCls(circle3, 'circleActive', 'circle');
    replaceCls(bar2, 'compltedBar', 'bar');
    replaceCls(circle2, 'circleCompleted', 'circleActive');
})

// Re-usable functions
const addCls = (element, className) => {
    element.classList.add(`${className}`);
}

const remvoeCls = (element, className) => {
    element.classList.remove(`${className}`);
}

const replaceCls = (element, existedCls, toChangedCls) => {
    element.classList.replace(`${existedCls}`, `${toChangedCls}`)
}

const optPrice = document.getElementById('options-price');

// offer - 2 box options changing border
const selectedOpt = (clicked) => {
    console.log("clicked", clicked);

    const opts = document.querySelectorAll('.offer2-opts');
    opts.forEach(opt => {
        remvoeCls(opt, 'borderBlueOffer2');
        remvoeCls(opt, 'borderGreenOffer2');
    });
    const colorSchema = JSON.parse(localStorage.getItem('colorSchema'));
    if (colorSchema === 'Green') addCls(clicked, 'borderGreenOffer2');
    else addCls(clicked, 'borderBlueOffer2');
    // clicked.classList.add('borderBlueOffer2');
}

// [Which frequency is right for me?] Offer-2 functionality
const householdItems = document.querySelectorAll('.household');
householdItems.length > 0 ? (householdItems[0].classList.add('household-slt')) : '';

householdItems.forEach(item => {
    item.addEventListener('click', () => {
        householdItems.forEach(el => el.classList.remove('household-slt'));
        item.classList.add('household-slt');
    });
});

// [Try Once Box] - Offer 3 functionality
const offerBoxes = document.querySelectorAll('.offerBox');
offerBoxes.length > 0 ? (offerBoxes[0].classList.add('selected-offer')) : '';

// Click handler for each box
offerBoxes.forEach(box => {
    box.addEventListener('click', () => {
        offerBoxes.forEach(b => b.classList.remove('selected-offer'));
        box.classList.add('selected-offer');
    });
});
