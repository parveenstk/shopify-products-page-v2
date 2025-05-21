// to track which flavour is selected

const yomzProduct = document.getElementById('yomz-original-carousel');
const soursProduct = document.getElementById('yomz-sours-carousel');

const handleCheckboxClick = (clicked) => {
    console.log("clicked:", clicked.value);
    if (clicked.value === 'yomzSours') {
        soursProduct.classList.add('show');
        soursProduct.classList.remove('hide');
        yomzProduct.classList.add('hide');
    } else if (clicked.value === 'yomzOriginal') {
        yomzProduct.classList.remove('hide');
        yomzProduct.classList.add('show');
        soursProduct.classList.add('hide');
    }

    const checkboxes = document.querySelectorAll('input[name="productType"]');
    checkboxes.forEach(cb => {
        if (cb !== clicked) cb.checked = false;
    });
};

const yomzOriginal = document.getElementById('yomz-original');
const yomzSours = document.getElementById('yomz-sours');

const nextStep1 = document.getElementById('nextStep1');
const nextStep2 = document.getElementById('nextStep2');
const backStep2 = document.getElementById('backStep2');
const backStep3 = document.getElementById('backStep3');
const offerOne = document.getElementById('offer-one');
const offerTwo = document.getElementById('offer-two');
const offerThree = document.getElementById('offer-three');

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