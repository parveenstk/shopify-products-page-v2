// Email inputs submission
document.addEventListener("DOMContentLoaded", function () {
    const desktopForm = document.getElementById("subscribe-desktop-form");
    const desktopEmail = document.getElementById('email-address-desktop');
    const mobileForm = document.getElementById("subscribe-mobile-form");
    const mobileEmail = document.getElementById('email-address-mobile');

    // desktop email input
    desktopForm && desktopForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const desktopData = desktopEmail.value;

        // Save to localStorage
        localStorage.setItem("Saved Email", desktopData);
        // console.log("Desktop Email", desktopEmail.value);
        saveEmail(desktopEmail.value);

        desktopEmail.value = ''; // it will clean the input
    });

    // mobile email input
    mobileForm && mobileForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const mobileData = mobileEmail.value;

        // Save to localStorage
        localStorage.setItem("Saved Email", mobileData);
        // console.log("Mobile Email:", mobileEmail.value);
        saveEmail(mobileEmail.value);

        mobileEmail.value = ''; // it will clean the input
    });

});

// on key down '/' focus on email Inputs
document.addEventListener('keydown', function (event) {
    if (event.key === '/') {
        event.preventDefault(); // prevent default browser search behavior
        const desktopEmail = document.getElementById('email-address-desktop');
        const mobileEmail = document.getElementById('email-address-mobile');
        (desktopEmail && desktopEmail.focus()) || (mobileEmail && mobileEmail.focus());
    }
});

// API call to save email inputs data in the sheet
const url = 'https://yomz-pages-data.vercel.app/api/data';
const emailInputtName = document.getElementById("email-address-desktop").getAttribute("name");
const desktopEmail = document.getElementById('email-address-desktop').value;

const saveEmail = async (email) => {
    const response = await fetch(`${url}?email=${email}&sheetName=${emailInputtName}&column=!B5:C5`, {
        method: 'GET'
    }).then(res => res.json());

    console.log("response:", response)
};