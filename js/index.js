// Yomz Carousels
const yomzProduct = document.getElementById("yomz-original-carousel");
const soursProduct = document.getElementById("yomz-sours-carousel");

// Yomz buttons
const originalButton = document.getElementById("original-Button");
const soursButton = document.getElementById("sours-Button");
const checkOriginal = document.getElementById("checkOriginal");
const checkSour = document.getElementById("checkSour");

// offer - 01
const nextStep1 = document.getElementById("nextStep1");
const offerOne = document.getElementById("offer-one");
const productDesc = document.getElementById("prod-Description");

// offer - 02
const nextStep2 = document.getElementById("nextStep2");
const backStep2 = document.getElementById("backStep2");
const offerTwo = document.getElementById("offer-two");
const boxBorder2 = document.getElementById("offer2-boxBorder");
const boxHeader2 = document.getElementById("offer2-boxHeader");
const saveText2 = document.getElementById("offer2-saveText");
const offer2Opt1 = document.getElementById("offer2-opt1");
const offer2Month = document.getElementById("offer2-month");

// offer - 02 ( package images )
const opt1Img = document.getElementById('opt1-img1');
const opt2Img = document.getElementById('opt1-img2');
const opt3Img = document.getElementById('opt1-img3');
const opt4Img = document.getElementById('opt1-img4');

// offer - 03
const nextStep3 = document.getElementById("nextStep3");
const backStep3 = document.getElementById("backStep3");
const offerThree = document.getElementById("offer-three");
const boxBorder3 = document.getElementById("offer3-boxBorder");
const saveText3 = document.getElementById("offer3-saveText");
const offerBox4 = document.getElementById("offerBox-4");
const badgeBox4 = document.getElementById("badge-box4");

// faqs ( yomz original & yomz sours )
const faqOriginal1 = document.getElementById("faq-yomzOriginal-1");
const faqOriginal2 = document.getElementById("faq-yomzOriginal-2");
const faqSours1 = document.getElementById("faq-yomzSours-1");
const faqSours2 = document.getElementById("faq-yomzSours-2");

// inputs of all offer pages
const checkInput1 = document.getElementById("checkBox-input1");
const checkInput2 = document.getElementById("checkBox-input2");
const checkInput3 = document.getElementById("checkBox-input3");
const checkInput4 = document.getElementById("checkBox-input4");

// Clear localStorage on page reload
window.addEventListener("load", function () {
    localStorage.clear();
});

// product price
const productPrice = document.getElementById("product-price");
const handleCheckboxClick = (clicked) => {
    if (clicked.value === "yomzSours") {
        // for yomz Sours

        localStorage.setItem("colorSchema", JSON.stringify("Green"));

        // change backgrounds
        const backgrounds = [nextStep1, nextStep2, nextStep3, boxHeader2, offer2Month, badgeBox4,];
        backgrounds.forEach((el) => addCls(el, "bg-Green"));

        // change borders
        const borders = [boxBorder2, boxBorder3, offerBox4];
        borders.forEach((el) => addCls(el, "borderGreen"));

        // change fonts
        const fonts = [saveText2, saveText3];
        fonts.forEach((el) => addCls(el, "fontGreen"));

        // faq section mobile
        remvoeCls(faqOriginal2, "show2");
        addCls(faqSours2, "show2");

        // products
        productDesc.innerHTML =
            '<p id="prod-Description" class="text-center mt-3 simp-font">Sour Flavor:<br>Sour Peachy, Strawbeary, Beary Berry</p>';
        productPrice.innerHTML =
            '<span id="product-price" class="tab-price">$XX.22</span>';

        // Inputs
        const inputs = [checkInput1, checkInput2, checkInput3, checkInput4];
        inputs.forEach((input) => addCls(input, "inputBorderGreen"));
        checkOriginal.style.accentColor = "black";
        originalButton.classList.remove("borderBlue");
        soursButton.classList.add("borderGreen");
        soursProduct.classList.remove("hide");
        soursProduct.classList.add("show");
        yomzProduct.classList.add("hide");

        // for changing pack images
        const imgs = [opt1Img, opt2Img, opt3Img, opt4Img];
        const paths = ['./images/yomzSours/pack-1.png', './images/yomzSours/pack-2.jpg', './images/yomzSours/pack-3.jpg', './images/yomzSours/pack-4.jpg'];
        imgs.forEach((img, index) => {
            img ? (img.src = paths[index]) : console.log("imgs are not found.");
        });

        // Refresh Swiper instance
        if (swiperInstances["yomz-sours-carousel"]) {
            const { productSlider, productThumbs } =
                swiperInstances["yomz-sours-carousel"];
            productSlider.update();
            productThumbs.update();
        }

        // for best value selectors ( offer - 2 box options changing border )
        const bestValueSelectors = document.querySelectorAll(".slt-bag-item .card");
        bestValueSelectors.forEach((selector) => {
            selector.classList.replace("borderBlueOffer2", "borderGreenOffer2");
        });

        // for changing the color on selection ( [Try Once Box] - Offer 3 functionality )
        const savePack = document.querySelectorAll(".offerBox");
        savePack.forEach((element) => {
            replaceCls(element, "selected-offer-blue", "selected-offer-Green");
        });

    } else if (clicked.value === "yomzOriginal") {
        // for yomzOriginal

        localStorage.setItem("colorSchema", JSON.stringify("Blue"));

        // change backgrounds
        const backgrounds = [nextStep1, nextStep2, nextStep3, boxHeader2, badgeBox4];
        backgrounds.forEach((el) => remvoeCls(el, "bg-Green"));

        // change borders
        const borders = [boxBorder2, offer2Opt1, boxBorder3, offerBox4];
        borders.forEach((el) => remvoeCls(el, "borderGreen"));

        // change fonts
        const fonts = [saveText2, saveText3];
        fonts.forEach((el) => remvoeCls(el, "fontGreen"));

        // change Inputs
        const inputs = [checkInput1, checkInput2, checkInput3, checkInput4];
        inputs.forEach((input) => remvoeCls(input, "inputBorderGreen"));

        // faq section mobile
        remvoeCls(faqSours2, "show2");
        addCls(faqOriginal2, "show2");

        // product description
        productDesc.innerHTML =
            '<p id="prod-Description" class="text-center mt-3 simp-font">Flavor:<br>Peachy, Strawbeary, Beary Berry</p>';
        productPrice.innerHTML =
            '<span id="product-price" class="tab-price">$XX.99</span>';
        offer2Month.classList.remove("bg-Green");
        checkSour.style.accentColor = "green";
        soursButton.classList.remove("borderGreen");
        originalButton.classList.add("borderBlue");
        yomzProduct.classList.remove("hide");
        yomzProduct.classList.add("show");
        soursProduct.classList.add("hide");

        // for changing pack images
        const imgs = [opt1Img, opt2Img, opt3Img, opt4Img];
        const paths = ['./images/yomzOriginal/pack-1.jpg', './images/yomzOriginal/pack-2.jpg', './images/yomzOriginal/pack-3.jpg', './images/yomzOriginal/pack-4.jpg'];
        imgs.forEach((img, index) => {
            img ? (img.src = paths[index]) : console.log("imgs are not found.");
        });

        // Refresh Swiper instance
        if (swiperInstances["yomz-original-carousel"]) {
            const { productSlider, productThumbs } =
                swiperInstances["yomz-original-carousel"];
            productSlider.update();
            productThumbs.update();
        }
        // for best value selectors ( offer - 2 box options changing border )
        const bestValueSelectors = document.querySelectorAll(".slt-bag-item .card");
        bestValueSelectors.forEach((selector) => {
            selector.classList.replace("borderGreenOffer2", "borderBlueOffer2");
        });
        // for changing the color on selection ( [Try Once Box] - Offer 3 functionality )
        const savePack = document.querySelectorAll(".offerBox");
        savePack.forEach((element) => {
            replaceCls(element, "selected-offer-Green", "selected-offer-blue");
        });
    }
    // Uncheck other checkboxes
    const checkboxes = document.querySelectorAll('input[name="productType"]');
    checkboxes.forEach((cb) => {
        if (cb !== clicked) cb.checked = false;
    });
};

// Stepper ( bar & circle )
const circle1 = document.getElementById("step1-circle");
const bar1 = document.getElementById("step1-bar");
const circle2 = document.getElementById("step2-circle");
const bar2 = document.getElementById("step2-bar");
const circle3 = document.getElementById("step3-circle");

// to move next1 to next2
nextStep1.addEventListener("click", () => {
    offerTwo.classList.remove("hide");
    offerOne.classList.add("hide");
    replaceCls(circle1, "active", "completed");
    replaceCls(bar1, "bar", "compltedBar");
    replaceCls(circle2, "circle", "circleActive");
});

// to move next2 to next3
nextStep2.addEventListener("click", () => {
    offerThree.classList.remove("hide");
    offerTwo.classList.add("hide");
    replaceCls(circle2, "circleActive", "circleCompleted");
    replaceCls(bar2, "bar", "compltedBar");
    replaceCls(circle3, "circle", "circleActive");
});

// to backward backButton-2 to step1
backStep2.addEventListener("click", () => {
    offerTwo.classList.add("hide");
    offerOne.classList.remove("hide");
    offerOne.classList.add("show");
    replaceCls(circle2, "circleActive", "circle");
    replaceCls(bar1, "compltedBar", "bar");
    replaceCls(circle1, "completed", "active");
});

// to backward backButton-3 to backButton-2
backStep3.addEventListener("click", () => {
    offerThree.classList.add("hide");
    offerTwo.classList.add("show");
    offerTwo.classList.remove("hide");
    replaceCls(circle3, "circleActive", "circle");
    replaceCls(bar2, "compltedBar", "bar");
    replaceCls(circle2, "circleCompleted", "circleActive");
});
// Re-usable functions
const addCls = (element, className) => {
    element.classList.add(`${className}`);
};
const remvoeCls = (element, className) => {
    element.classList.remove(`${className}`);
};
const replaceCls = (element, existedCls, toChangedCls) => {
    element.classList.replace(`${existedCls}`, `${toChangedCls}`);
};
// offer - 2 box options changing border [Best Value Box]
const selectedOpt = (clicked) => {
    const optPrice = document.getElementById("options-price");
    const opts = document.querySelectorAll(".offer2-opts");
    opts.forEach((opt) => {
        remvoeCls(opt, "borderBlueOffer2");
        remvoeCls(opt, "borderGreenOffer2");
    });
    const colorSchema = JSON.parse(localStorage.getItem("colorSchema"));
    colorSchema === "Green"
        ? addCls(clicked, "borderGreenOffer2")
        : addCls(clicked, "borderBlueOffer2");
    // to change the ( options-price )
    const value = clicked.dataset.id;
    const optPriceValue = optPrice.dataset.price;
    const finalValue = value * optPriceValue;
    optPrice.innerText = `$${finalValue.toFixed(2)}`;

    // Run SelectProduct for cart updation
    selectProduct(clicked.dataset.id);
};
// [Which frequency is right for me?] Offer-2 functionality
const householdItems = document.querySelectorAll(".household");
householdItems.length > 0
    ? householdItems[0].classList.add("household-slt")
    : "";
householdItems.forEach((item) => {
    item.addEventListener("click", () => {
        householdItems.forEach((el) => el.classList.remove("household-slt"));
        item.classList.add("household-slt");
    });
});
// [Try Once Box] - Offer 3 functionality
const offerBoxes = document.querySelectorAll(".offerBox");
offerBoxes.length > 0 ? offerBoxes[0].classList.add("selected-offer-blue") : "";
offerBoxes.forEach((box) => {
    box.addEventListener("click", () => {
        offerBoxes.forEach((b) => b.classList.remove("selected-offer-blue"));
        offerBoxes.forEach((b) => b.classList.remove("selected-offer-Green"));
        // to change/update the "offer3 - tryOnce Value"
        const tryOncePrice = document.getElementById("tryOnce-price");
        const tryPrice = tryOncePrice.dataset.price;
        const value = box.dataset.price;
        const percentage = box.dataset.percentage;
        // Updated Value ( Try Offer Box )
        const finalValue = value * tryPrice;
        tryOncePrice.innerText = `$${finalValue.toFixed(2)}`;
        // Updated Best Value Box ( offer-3 )
        saveText3.innerText = `Save ${percentage}%`;
        // to change value & save% of [bestValueBox offer-3]
        const bestValuePrice = document.getElementById("Offer3-bestValue-Price");
        const bestValue = bestValuePrice.dataset.price;
        const UpdatedBestValue = value * bestValue;
        bestValuePrice.innerHTML = `$${UpdatedBestValue.toFixed(2)}`;
        // saveText3
        // console.log("bestValue:", bestValue);
        // to fill the color according to the gummy selected
        const colorSchema = JSON.parse(localStorage.getItem("colorSchema"));
        colorSchema === "Green"
            ? addCls(box, "selected-offer-Green")
            : box.classList.add("selected-offer-blue");
    });
});
// offer - 3 ( Best Value Box )
const checkbox = document.getElementById("checkBox-input4");
const bestValueBox = document.getElementById("offer3-bv-box");
const bestValueHeader = document.getElementById("offer3-bv-box-header");
// show border color & header color when input is checked
const updateBoxBorder = () => {
    const colorSchema = JSON.parse(localStorage.getItem("colorSchema")) || "Blue";
    bestValueBox.classList.remove("borderGreenOffer2", "borderBlueOffer2");
    bestValueHeader.classList.remove("bg-Green", "bg-Blue");
    if (checkbox.checked) {
        const borderClass =
            colorSchema === "Green" ? "borderGreenOffer2" : "borderBlueOffer2";
        const bgClass = colorSchema === "Green" ? "bg-Green" : "bg-Blue";
        bestValueBox.classList.add(borderClass);
        bestValueHeader.classList.add(bgClass);
    }
};
checkbox.addEventListener("change", updateBoxBorder);

// Cart Section
const cart = document.getElementById("cart-section");
const cartCrossBtn = document.getElementById("cartCross-btn");
const cartIcon = document.getElementById("cartIcon");
const cartIconMobile = document.getElementById("cartIcon-mobile");
const cartOverlay = document.getElementById("cart-overlay");

// cart items
const cartItem1 = document.getElementById("cartItem-1");
const cartCross = document.getElementById("cartCross");

// 3NextStep Button of 2nd product banner
const nextStep3_3 = document.getElementById("nextStep3-2");

// Helper function to show cart and overlay
function showCart() {
    replaceCls(cart, "hide", "show");
    replaceCls(cartOverlay, "hide", "show");
}

// Helper function to hide cart and overlay
function hideCart() {
    replaceCls(cart, "show", "hide");
    replaceCls(cartOverlay, "show", "hide");
}

// Hook into events
nextStep3?.addEventListener("click", showCart);
nextStep3_3?.addEventListener("click", showCart);
cartIcon?.addEventListener("click", showCart);
cartIconMobile?.addEventListener("click", showCart);
cartCrossBtn?.addEventListener("click", hideCart);
cartOverlay?.addEventListener("click", hideCart); // Click outside to close
// cartCross.addEventListener("click", () => {
//     addCls(cartItem1, "hide");
// });

// Product Details
const products = [
    {
        id: 1,
        title: "YOMZ DAILY NUTRITION - 28 Packets 40% Off Auto Renew",
        image: "images/slider/4.png",
        quantity: 1,
        price: 12
    },
    {
        id: 2,
        title: "2 x YOMZ DAILY NUTRITION - 28 Packets 40% Off Auto Renew",
        image: "images/slider/4.png",
        quantity: 1,
        price: 24
    },
    {
        id: 3,
        title: "3 x YOMZ DAILY NUTRITION - 28 Packets 40% Off Auto Renew",
        image: "images/slider/4.png",
        quantity: 1,
        price: 36
    },
    {
        id: 4,
        title: "4 x YOMZ DAILY NUTRITION - 28 Packets 40% Off Auto Renew",
        image: "images/slider/4.png",
        quantity: 1,
        price: 48
    }
];

// Select product (offer2)
const selectProduct = (id) => {
    const existingCartData = JSON.parse(localStorage.getItem("cartData")) ? JSON.parse(localStorage.getItem("cartData")) : [];
    const existingProduct = existingCartData.filter(product => product.id === Number(id));

    // check if product already exist in cart
    if (existingProduct.length > 0) {
        handleExistingProduct(existingProduct[0].id);
    } else {
        const data = products.find(product => product.id === Number(id));
        localStorage.setItem("cartData", JSON.stringify([...existingCartData, data]));
    }
    updateCart();
}

// if product already existed then "update the quantity".
const handleExistingProduct = (id) => {
    const existingCartData = JSON.parse(localStorage.getItem("cartData")) || [];

    const updatedCartData = existingCartData.map(product => {
        if (product.id === Number(id)) {
            return { ...product, quantity: product.quantity + 1 };
        }
        return product;
    });

    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
}

// udpate cart data
const updateCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartData")) || [];
    const container = document.getElementById('cartContainer');
    const newHtml = existingCart.map(product => {
        const html = `
        <div id="cartItem-${product.id}" class="card-item">
               <img id="cartCross" src="images/cross.svg" class="img-fluid crossiocns">
               <div class="row">
                  <div class="col-3 px-0">
                     <!-- product image -->
                     <div class="card-products-images">
                        <img src="${product.image}" class="img-fluid">
                     </div>
                     <div class="input-group mb-3">
                        <button class="btn btn-outline-secondary" type="button" id="minus"><i
                              class="fas fa-minus"></i></button>
                        <input type="number" class="form-control no-arrow" id="quantity" value="${product.quantity}" min="1" max="100">
                        <button class="btn btn-outline-secondary" type="button" id="plus">
                        <i class="fas fa-plus"></i></button>
                     </div>
                  </div>
                  <!-- product descriptions -->
                  <div class="col-9 px-0">
                     <div class="card-products-titles">
                        <h3>${product.title}</h3>
                        <h4>YOMZ Original / 1 Case</h4>
                        <p class="card-products-price-">$${product.price * product.quantity}</p>
                        <p class="daily-items">($3.85 per daily dose)</p>
                     </div>
                  </div>
               </div>
               <hr>
            </div>
        `
        return html;
    })
    container.innerHTML = newHtml;
}
