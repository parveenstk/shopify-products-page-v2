// Use shipping address as billing address (checkbox hide & show functionality)
const shippingCheckbox = document.getElementById('shipping-checkbox');
const billingAddText = document.getElementById('billing-address-text');
const billingFeilds = document.getElementById('billing-address-feilds');

function toggleBillingAddress() {
    if (shippingCheckbox.checked) {
        billingAddText.classList.add('hide');
        billingFeilds.classList.add('hide');
    } else {
        billingAddText.classList.remove('hide');
        billingFeilds.classList.remove('hide');
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
    console.log("existingCart", existingCart);

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

    if (existingCartData.length > 0) {
        const totalSubPrice = existingCartData.reduce((acc, product) => {
            return acc + (product.price * product.quantity);
        }, 0);
        orderHeaderTotal.textContent = `$${totalSubPrice.toFixed(2)}`;
    } else {
        orderHeaderTotal.textContent = "$0.00";
    }

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

// form elements / inputs
const email = document.getElementById('email-address');
const firstName = document.getElementById('');
const lastName = document.getElementById('');
const address = document.getElementById('');
const city = document.getElementById('');
const postalCode = document.getElementById('');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // to prevent refresh on reload.

    // getting data by inputs
    const emailData = email.value;
    console.log("email", emailData);

    // to clean the inputs
    email.value = '';

})