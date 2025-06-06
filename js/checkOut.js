// Use shipping address as billing address (checkbox hide & show functionality)
const shippingCheckbox = document.getElementById('shipping-checkbox');
const billingAddText = document.getElementById('billing-address-text');
const billingFeilds = document.getElementById('billing-address-feilds');

function toggleBillingAddress() {
    if (shippingCheckbox.checked) {
        billingAddText.classList.add('hide');
        billingFeilds.classList.add('hide');
        console.log("tick hain");
    } else {
        billingAddText.classList.remove('hide');
        billingFeilds.classList.remove('hide');
        billingDetails();
    }
}

toggleBillingAddress();
shippingCheckbox.addEventListener('change', toggleBillingAddress);

// Update products
const updateProduct = () => {
    const productContainer = document.getElementById('products-container');
    const existingCart = JSON.parse(localStorage.getItem("cartData")) || [];

    const newHtml = existingCart.map(product => {
        const html = `
                <div class="product-card row">
                    <div class="col-2 px-0">
                        <div class="product-image">
                            <img src=${product.image} alt="">
                                <div class="number-joit">${product.quantity}</div>
                        </div>
                    </div>
                    <div class="product-info col-8">
                        <div class="product-title">${product.title}</div>
                        <div class="product-subtitle">${product.gummyType} / 1 Case</div>
                    </div>
                    <div class="product-price col-2">$${(product.price).toFixed(2)}</div>
                </div>
               `
        return html;
    })
    const adjustedHtmlString = newHtml.join('');
    productContainer.innerHTML = adjustedHtmlString;
};

document.addEventListener("DOMContentLoaded", function () {
    updateProduct();
    updateTotal();
    udpateOrderSummary();
    orderSummaryTotal();
});

// Sub-total & Total price update 
const updateTotal = () => {
    const subTotal = document.getElementById("sut-total");
    const finalTotal = document.getElementById('final-total');
    const totalItem = document.getElementById('total-items');
    const existingCartData = JSON.parse(localStorage.getItem("cartData")) || [];

    if (existingCartData.length > 0) {
        const totalSubPrice = existingCartData.reduce((acc, product) => {
            return acc + (product.price * product.quantity);
        }, 0);
        subTotal.textContent = `$${totalSubPrice.toFixed(2)}`;
    } else {
        subTotal.textContent = "$0.00";
    }

    if (existingCartData.length > 0) {
        const totalPrice = existingCartData.reduce((acc, product) => {
            return acc + (product.price * product.quantity);
        }, 0);
        finalTotal.textContent = `$${totalPrice.toFixed(2)}`;
    } else {
        finalTotal.textContent = "$0.00";
    }

    totalItem.innerHTML = `<span id="total-items">Subtotal · ${existingCartData.length + 3} items</span>`
};

// Order summary section ( mobile view )
const udpateOrderSummary = () => {
    const summaryProductContainer = document.getElementById('ordersummary-products-container');
    const existingCart = JSON.parse(localStorage.getItem("cartData")) || [];
    // console.log("existingCart", existingCart);

    const newHtml = existingCart.map(product => {
        const html = `
                <div class="product-card row">
                    <div class="col-2 px-0">
                        <div class="product-image">
                            <img src=${product.image} alt="">
                                <div class="number-joit">${product.quantity}</div>
                        </div>
                    </div>
                    <div class="product-info col-8">
                        <div class="product-title">${product.title}</div>
                        <div class="product-subtitle">${product.gummyType} / 1 Case</div>
                    </div>
                    <div class="product-price col-2">$${(product.price).toFixed(2)}</div>
                </div>
               `
        return html;
    })
    const adjustedHtmlString = newHtml.join('');
    summaryProductContainer.innerHTML = adjustedHtmlString;
}

const orderSummaryTotal = () => {
    const orderHeaderTotal = document.getElementById('ordersummary-header-total');
    const orderSubTotal = document.getElementById('ordersummary-subtotal');
    const orderQuantity = document.getElementById('ordersummary-quantity');
    const orderTotal = document.getElementById('oredersummary-total');
    const existingCartData = JSON.parse(localStorage.getItem("cartData")) || [];

    // to updated 'Order total'
    if (existingCartData.length > 0) {
        const totalSubPrice = existingCartData.reduce((acc, product) => {
            return acc + (product.price * product.quantity);
        }, 0);
        orderHeaderTotal.textContent = `$${totalSubPrice.toFixed(2)}`;
    } else {
        orderHeaderTotal.textContent = "$0.00";
    }

    // to updated 'Order subTotal'
    if (existingCartData.length > 0) {
        const totalSubPrice = existingCartData.reduce((acc, product) => {
            return acc + (product.price * product.quantity);
        }, 0);
        orderSubTotal.textContent = `$${totalSubPrice.toFixed(2)}`;
    } else {
        orderSubTotal.textContent = "$0.00";
    }

    if (existingCartData.length > 0) {
        const totalSubPrice = existingCartData.reduce((acc, product) => {
            return acc + (product.price * product.quantity);
        }, 0);
        orderTotal.innerHTML = `<strong id="oredersummary-total"><sub>USD</sub>$${totalSubPrice.toFixed(2)}</strong>`;
    } else {
        orderTotal.innerHTML = `<strong id="oredersummary-total"><sub>USD</sub>$0.00</strong>`;
    }
    orderQuantity.innerHTML = `<span id="total-items">Subtotal · ${existingCartData.length + 3} items</span>`
}

// form submission & data
const form = document.getElementById('checkout-form');
const paynowBtn = document.getElementById('paynow-button');

// delivery section inputs
const email = document.getElementById('delivery-email-address');
const firstName = document.getElementById('delivery-first-name');
const lastName = document.getElementById('delivery-last-name');
const address = document.getElementById('delivery-address');
const addressOptional = document.getElementById('delivery-address-optional');
const city = document.getElementById('delivery-city');
const state = document.getElementById('delivery-state');
const postalCode = document.getElementById('delivery-postal-code');

// credit card inputs
const cardNumber = document.getElementById('credit-card-number');
const cardExpiry = document.getElementById('credit-card-expiry');
const cartCVV = document.getElementById('credit-card-cvv');
const nameOnCard = document.getElementById('nameon-credit-card');

// billing address
const billingFirstName = document.getElementById('billing-first-name');
const billingLastName = document.getElementById('billing-last-name');
const billingAddress = document.getElementById('billing-address');
const billingAddressOtional = document.getElementById('billing-address-optional');
const billingCity = document.getElementById('billing-city');
const billingState = document.getElementById('billing-state');
const billingPostalCode = document.getElementById('billing-postal-code');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page refresh

    const checkoutData = {
        'credit card': {
            cardNumber: cardNumber.value,
            cardExpiry: cardExpiry.value,
            cartCVV: cartCVV.value,
            nameOnCard: nameOnCard.value,
        },
        'delivery address': {
            email: email.value,
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            addressOptional: addressOptional.value,
            city: city.value,
            state: state.value,
            postalCode: postalCode.value,
        }
    };

    // Conditionally add billing address if checkbox is not checked
    if (!shippingCheckbox.checked) {
        checkoutData['billing address'] = {
            billingFirstName: billingFirstName.value,
            billingLastName: billingLastName.value,
            billingAddress: billingAddress.value,
            billingAddressOptional: billingAddressOtional.value,
            billingCity: billingCity.value,
            billingState: billingState.value,
            billingPostalCode: billingPostalCode.value
        };
    }

    let allCheckouts = JSON.parse(localStorage.getItem('checkoutData')) || [];
    allCheckouts.push(checkoutData);
    localStorage.setItem('checkoutData', JSON.stringify(allCheckouts));

    resetForm();
});

const resetForm = () => {

    // to clean the inputs
    email.value = '';
    firstName.value = '';
    lastName.value = '';
    address.value = '';
    city.value = '';
    postalCode.value = '';

    // credit card
    cardNumber.value = '';
    cardExpiry.value = '';
    cartCVV.value = '';
    nameOnCard.value = '';

    // billing address 
    billingFirstName.value = '';
    billingLastName.value = '';
    billingAddress.value = '';
    billingAddressOtional.value = '';
    billingCity.value = '';
    billingState.value = '';
    billingPostalCode.value = '';
}

const dataArray = JSON.parse(localStorage.getItem('checkoutData')) || [];
console.log(dataArray);

// card expiry work format in MM / YY
const expiryInput = document.getElementById('credit-card-expiry');

expiryInput.addEventListener('input', function () {
    let rawValue = this.value.replace(/\D/g, ''); // Remove non-digits
    let formattedValue = '';

    if (rawValue.length === 0) {
        this.value = '';
        return;
    }

    // Handle month (first two digits)
    if (rawValue.length >= 1) {
        let month = rawValue.slice(0, 2);

        // If user typed 1 digit
        if (rawValue.length === 1) {
            formattedValue = rawValue;
            this.value = formattedValue;
            return;
        }

        const monthNum = parseInt(month, 10);

        if (monthNum < 1 || monthNum > 12) {
            this.value = ''; // Invalid month
            return;
        }

        formattedValue = month;
    }

    // Handle year
    if (rawValue.length > 2) {
        const year = rawValue.slice(2, 4);
        formattedValue += ' / ' + year;
    }

    this.value = formattedValue;
});

// card cvv value should more then 4
const cvvInput = document.getElementById('credit-card-cvv');

cvvInput.addEventListener('input', function () {
    // Keep only digits
    this.value = this.value.replace(/\D/g, '');

    // Limit to 4 digits max
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
});

// billing address selection 
document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[name="billingAddressFlexRadioDefault"]');
    const collapseSix = document.getElementById('collapsesix');
    const shippingAddresss = document.getElementById('same-as-shipping-address');

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.id === 'flexRadioDefault4') {
                console.log("this.id", this.id);

                // Hide other collapse
                if (collapseSix.classList.contains('show')) {
                    bootstrap.Collapse.getInstance(collapseSix).hide();
                }

                // Set background on active
                shippingAddresss.classList.replace('not-select', 'on-select');
            }

            if (this.id === 'flexRadioDefault5') {
                // Show the collapse if not already shown
                if (!collapseSix.classList.contains('show')) {
                    new bootstrap.Collapse(collapseSix, {
                        toggle: true
                    });
                    shippingAddresss.classList.replace('on-select', 'not-select');
                }
            }
        });
    });
});

// // Onclick payPal btn show & hide 
// const creditCard = document.getElementById('credit-card-option');
// const payPal = document.getElementById('payPal-option');
// const payPalBtn = document.getElementById('payPal-button');
// const payNowBtn = document.getElementById('paynow-button');

// payPal.addEventListener('click', () => {
//     payPalBtn.classList.remove('hide');
//     paynowBtn.classList.add('hide');
// })

// creditCard.addEventListener('click', ()=>{
//     payPalBtn.classList.add('hide');
//     paynowBtn.classList.remove('hide');
// })

// payment mode selection & changing button accordingly
const paymentOptions = {
    creditCard: document.getElementById('credit-card-option'),
    payPal: document.getElementById('payPal-option'),
};

const buttons = {
    creditCard: document.getElementById('paynow-button'),
    payPal: document.getElementById('payPal-button'),
};

// Utility to toggle visibility
const togglePaymentButtons = (activeMethod) => {
    for (const method in buttons) {
        buttons[method].classList.toggle('hide', method !== activeMethod);
    }
};

// Bind events
paymentOptions.creditCard.addEventListener('click', () => togglePaymentButtons('creditCard'));
paymentOptions.payPal.addEventListener('click', () => togglePaymentButtons('payPal'));
