// Offer2 - Selection Options

const selectedOpt = (clicked) => {
    const opts = document.querySelectorAll('.offer2-opts');

    opts.forEach(opt => {
        opt.classList.remove('borderBlueOffer2');
    });

    clicked.classList.add('borderBlueOffer2');
}
