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