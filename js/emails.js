// Email inputs submission
document.addEventListener("DOMContentLoaded", function () {
    const desktopForm = document.getElementById("subscribe-desktop");
    const desktopEmail = document.getElementById('email-address-desktop');
    const mobileForm = document.getElementById("subscribe-mobile");
    const mobileEmail = document.getElementById('email-address-mobile');

    // desktop email input
    desktopForm && desktopForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const desktopData = desktopEmail.value;

        // Save to localStorage
        localStorage.setItem("Saved Email", desktopData);
        console.log("Desktop Email", desktopEmail.value);

        desktopEmail.value = ''; // it will clean the input
    });

    // mobile email input
    mobileForm && mobileForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const mobileData = mobileEmail.value;

        // Save to localStorage
        localStorage.setItem("Saved Email", mobileData);
        console.log("Mobile Email:", mobileEmail.value);

        mobileEmail.value = ''; // it will clean the input
    });

});
