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