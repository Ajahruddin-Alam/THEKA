let appliedDiscount = 0;
let appliedCoupon = "";
let currentOrderId = "";

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});


function btnMail(){
    alert("Your Email Send Thanks !!")
}

// Scroll animation
const scrollElements = document.querySelectorAll('.animate');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.classList.add('active');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

window.addEventListener("scroll", () => {
    document
        .querySelector(".navbar")
        .classList.toggle("active", window.scrollY > 50);
});
/* ===========================
   NAVBAR SCROLL EFFECT
=========================== */

window.addEventListener("scroll", () => {

    document
        .querySelector(".navbar")
        .classList.toggle(
            "active",
            window.scrollY > 50
        );

});

/* ===========================
   TYPING EFFECT
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    const words = [
        "Premium Coffee ☕",
        "Healthy Breakfast 🥗",
        "Fresh Bakery 🥐",
        "Delicious Desserts 🍰",
        "Hygienic Food ❤️"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typingElement =
    document.getElementById("typing");

    if(!typingElement) return;

    function typeEffect(){

        const currentWord =
        words[wordIndex];

        if(!deleting){

            typingElement.textContent =
            currentWord.substring(0,charIndex++);

            if(charIndex >
               currentWord.length){

                deleting = true;

                setTimeout(typeEffect,1500);
                return;
            }

        }else{

            typingElement.textContent =
            currentWord.substring(0,charIndex--);

            if(charIndex < 0){

                deleting = false;

                wordIndex =
                (wordIndex + 1) %
                words.length;
            }
        }

        setTimeout(
            typeEffect,
            deleting ? 50 : 100
        );
    }

    typeEffect();

});

/* =========================
   COUNTER ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const counters =
        document.querySelectorAll(".counter");

    const statsSection =
        document.querySelector(".stats-section");

    // Stats section nahi hai
    if (!statsSection || counters.length === 0) {
        return;
    }


    let counterStarted = false;


    function startCounter() {

        // Prevent duplicate animation
        if (counterStarted) {
            return;
        }

        counterStarted = true;


        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            // Invalid target check
            if (!Number.isFinite(target)) {
                return;
            }


            const duration = 1500;

            const startTime =
                performance.now();


            function updateCounter(currentTime) {

                const elapsed =
                    currentTime - startTime;

                const progress =
                    Math.min(
                        elapsed / duration,
                        1
                    );


                // Smooth animation
                const currentValue =
                    Math.floor(
                        progress * target
                    );


                counter.innerText =
                    currentValue.toLocaleString();


                if (progress < 1) {

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    // Final display
                    if (target === 5000) {

                        counter.innerText =
                            "5000+";

                    }

                    else if (target === 50) {

                        counter.innerText =
                            "50+";

                    }

                    else if (target === 100) {

                        counter.innerText =
                            "100%";

                    }

                    else if (target === 5) {

                        counter.innerText =
                            "5★";

                    }

                    else {

                        counter.innerText =
                            target.toLocaleString();

                    }

                }

            }


            requestAnimationFrame(
                updateCounter
            );

        });

    }


    // Observe stats section
    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        startCounter();

                        observer.unobserve(
                            statsSection
                        );

                    }

                });

            },

            {
                threshold: 0.25
            }

        );


    observer.observe(
        statsSection
    );

});

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons =
    document.querySelectorAll(
        ".filter-buttons button"
    );

    const menuCards =
    document.querySelectorAll(
        ".menu-card"
    );

    if (
        filterButtons.length === 0 ||
        menuCards.length === 0
    ) {
        return;
    }

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(btn =>
                    btn.classList.remove(
                        "active"
                    )
                );

                button.classList.add(
                    "active"
                );

                const filter =
                button.getAttribute(
                    "data-filter"
                );

                menuCards.forEach(card => {

                    if (
                        filter === "all" ||
                        card.classList.contains(
                            filter
                        )
                    ) {

                        card.style.display =
                        "block";

                    } else {

                        card.style.display =
                        "none";

                    }

                });

            }
        );

    });

});

let cart = [];
document.addEventListener("DOMContentLoaded", () => {

const menuItems = [

{category:"coffee",name:"Espresso",price:"₹99",description:"Strong and rich coffee shot.",bestSeller:true},
{category:"coffee",name:"Americano",price:"₹119",description:"Smooth espresso with hot water.",bestSeller:false},
{category:"coffee",name:"Cappuccino",price:"₹149",description:"Rich espresso with creamy foam.",bestSeller:true},
{category:"coffee",name:"Cafe Latte",price:"₹159",description:"Steamed milk with espresso.",bestSeller:false},
{category:"coffee",name:"Mocha",price:"₹179",description:"Coffee blended with chocolate.",bestSeller:false},
{category:"coffee",name:"Flat White",price:"₹169",description:"Velvety smooth coffee.",bestSeller:false},
{category:"coffee",name:"Cold Coffee",price:"₹159",description:"Refreshing chilled coffee.",bestSeller:true},
{category:"coffee",name:"Caramel Macchiato",price:"₹199",description:"Coffee with caramel flavor.",bestSeller:true},

{category:"breakfast",name:"Veg Sandwich",price:"₹129",description:"Fresh vegetables and cheese.",bestSeller:false},
{category:"breakfast",name:"Cheese Sandwich",price:"₹149",description:"Loaded cheese sandwich.",bestSeller:false},
{category:"breakfast",name:"Club Sandwich",price:"₹179",description:"Premium layered sandwich.",bestSeller:true},
{category:"breakfast",name:"Grilled Toast",price:"₹119",description:"Perfect crispy toast.",bestSeller:false},
{category:"breakfast",name:"Pancakes",price:"₹199",description:"Soft pancakes with syrup.",bestSeller:true},
{category:"breakfast",name:"French Toast",price:"₹189",description:"Classic breakfast delight.",bestSeller:false},
{category:"breakfast",name:"Omelette",price:"₹99",description:"Freshly prepared omelette.",bestSeller:false},
{category:"breakfast",name:"Healthy Oats Bowl",price:"₹169",description:"Nutritious and healthy.",bestSeller:true},

{category:"dessert",name:"Chocolate Brownie",price:"₹99",description:"Rich chocolate brownie.",bestSeller:true},
{category:"dessert",name:"Red Velvet Cake",price:"₹149",description:"Soft red velvet delight.",bestSeller:false},
{category:"dessert",name:"Cheesecake",price:"₹179",description:"Creamy baked cheesecake.",bestSeller:true},
{category:"dessert",name:"Chocolate Muffin",price:"₹89",description:"Fresh baked muffin.",bestSeller:false},
{category:"dessert",name:"Cookies",price:"₹79",description:"Crunchy cookies.",bestSeller:false},
{category:"dessert",name:"Tiramisu",price:"₹219",description:"Italian coffee dessert.",bestSeller:true},
{category:"dessert",name:"Donuts",price:"₹99",description:"Soft and sweet donuts.",bestSeller:false},

{category:"drink",name:"Fresh Lime Soda",price:"₹99",description:"Refreshing lime cooler.",bestSeller:false},
{category:"drink",name:"Mango Smoothie",price:"₹149",description:"Fresh mango blend.",bestSeller:true},
{category:"drink",name:"Strawberry Shake",price:"₹169",description:"Creamy strawberry shake.",bestSeller:false},
{category:"drink",name:"Chocolate Shake",price:"₹179",description:"Rich chocolate shake.",bestSeller:true},
{category:"drink",name:"Mint Mojito",price:"₹129",description:"Cool mint refreshment.",bestSeller:false},
{category:"drink",name:"Fresh Orange Juice",price:"₹139",description:"Freshly squeezed juice.",bestSeller:false},
{category:"drink",name:"Watermelon Cooler",price:"₹149",description:"Summer special drink.",bestSeller:true}

];

const menuGrid = document.getElementById("menuGrid");

function renderMenu(filter = "all") {

menuGrid.innerHTML = "";

const filteredItems =
filter === "all"
? menuItems
: menuItems.filter(item => item.category === filter);

filteredItems.forEach(item => {

menuGrid.innerHTML += `
<div class="menu-card ${item.category}">

${item.bestSeller
? '<div class="ribbon">Best Seller</div>'
: ''}

<div class="menu-content">

<h3>${item.name}</h3>

<p>${item.description}</p>

<div class="menu-footer">

<span class="price">
${item.price}
</span>

<button class="order-btn"
onclick="addToCart(
'${item.name}',
${item.price.replace('₹','')}
)">
    Add To Cart
</button>

</div>

</div>

</div>
`;

});

}


renderMenu();

const filterButtons =
document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

filterButtons.forEach(btn =>
btn.classList.remove("active")
);

button.classList.add("active");

renderMenu(
button.dataset.filter
);

});

});

});
function subscribeNewsletter(){

    const email =
    document.getElementById("newsletterEmail");

    const msg =
    document.getElementById("newsletterMsg");

    if(email.value.trim() === ""){

        msg.innerHTML =
        "⚠ Please enter your email address";

        msg.style.color = "#ff6b6b";

        return;
    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)){

        msg.innerHTML =
        "⚠ Please enter a valid email";

        msg.style.color = "#ff6b6b";

        return;
    }

    msg.innerHTML =
    "✅ Thank you for subscribing!";

    msg.style.color = "#4ade80";

    email.value = "";
}

ddocument.addEventListener(
"DOMContentLoaded",
()=>{

const topBtn =
document.getElementById(
"topBtn"
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 500){

topBtn.classList.add(
"show"
);

}else{

topBtn.classList.remove(
"show"
);

}

});

topBtn.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

});


AOS.init({

    duration:1000,

    once:true,

    offset:120

});

function addToCart(name, price){

    const existingItem =
    cart.find(item =>
        item.name === name
    );

    if(existingItem){

        existingItem.qty++;

    }else{

        cart.push({

            name:name,

            price:price,

            qty:1

        });

    }

    updateCartCount();

    updateCartUI();   // ← IMPORTANT

    console.log(cart);
    console.log(
document.getElementById(
"cartItems"
)
);

}


function updateCartCount(){

    const totalItems =
    cart.reduce(
        (sum,item)=>
        sum + item.qty,
        0
    );

    document.getElementById(
        "cartCount"
    ).innerText = totalItems;

}

var tidio =
document.getElementById(
"tidio-chat-code"
);

document.addEventListener(
"keydown",
function(e){

    if(e.key === "Escape"){

        document
        .getElementById("cartSidebar")
        .classList
        .remove("active");

        document
        .getElementById("cartOverlay")
        .classList
        .remove("active");

    }

});

function toggleCart(){

    document
    .getElementById("cartSidebar")
    .classList
    .toggle("active");

    document
    .getElementById("cartOverlay")
    .classList
    .toggle("active");

}




function increaseQty(name){

    const item =
    cart.find(
        item => item.name === name
    );

    if(item){

        item.qty++;

    }

    updateCartUI();

    updateCartCount();

}

function decreaseQty(name){

    const item =
    cart.find(
        item => item.name === name
    );

    if(!item) return;

    if(item.qty > 1){

        item.qty--;

    }else{

        cart =
        cart.filter(
            i => i.name !== name
        );

    }

    updateCartUI();

    updateCartCount();

}



const coupons = [

{
    code:"WELCOME5",
    discount:5,
    min:0,
    description:"5% OFF First Order"
},

{
    code:"COFFEE10",
    discount:10,
    min:300,
    description:"10% OFF Above ₹300"
},

{
    code:"COFFEE15",
    discount:15,
    min:500,
    description:"15% OFF Above ₹500"
},

{
    code:"COFFEE20",
    discount:20,
    min:1000,
    description:"20% OFF Above ₹1000"
}

];


function renderCoupons(total){

    const couponCards =
    document.getElementById("couponCards");

    if(!couponCards) return;

    couponCards.innerHTML = "";

    let coupon = null;

    if(total >= 1000){

        coupon = {
            code:"COFFEE20",
            discount:20,
            text:"20% OFF Above ₹1000"
        };

    }else if(total >= 500){

        coupon = {
            code:"COFFEE15",
            discount:15,
            text:"15% OFF Above ₹500"
        };

    }else if(total >= 300){

        coupon = {
            code:"COFFEE10",
            discount:10,
            text:"10% OFF Above ₹300"
        };

    }else{

        couponCards.innerHTML = `
        <p style="color:#777;font-size:14px;">
        🚀 Add ₹${300-total} more to unlock COFFEE10
        </p>
        `;
        return;
    }

    const isApplied =
    appliedCoupon === coupon.code;

    couponCards.innerHTML = `

    <div class="coupon-card">

        <div class="coupon-info">

            <h5>${coupon.code}</h5>

            <p>${coupon.text}</p>

        </div>

        ${
            isApplied

            ?

            `<span
            class="applied-chip"
            onclick="applyCoupon('${coupon.code}',${coupon.discount})">

            ✓ APPLIED

            </span>`

            :

            `<button
            class="apply-btn"
            onclick="applyCoupon('${coupon.code}',${coupon.discount})">

            Apply

            </button>`
        }

    </div>

    `;
}


function updateCartUI(){

    const cartItems =
    document.getElementById("cartItems");

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach(item => {

        total += item.price * item.qty;

        cartItems.innerHTML += `

<div class="cart-item">

    <div class="cart-info">

        <div class="item-row">

            <h4>${item.name}</h4>

            <div class="qty-controls">

                <button onclick="decreaseQty('${item.name}')">
                    -
                </button>

                <span>${item.qty}</span>

                <button onclick="increaseQty('${item.name}')">
                    +
                </button>

            </div>

        </div>

        <p class="item-total">

            ₹${item.price} × ${item.qty}

        </p>

        <p class="item-subtotal">

            Total: ₹${item.price * item.qty}

        </p>

    </div>

</div>

`;

    });

    // Coupon Discount

    let discountAmount = 0;

    if(appliedDiscount > 0){

        discountAmount =
        (total * appliedDiscount) / 100;

    }

    // Delivery Charge

    let deliveryCharge = 50;

    if(total >= 500){

        deliveryCharge = 0;

    }

    // Final Total

    let finalTotal =
    total - discountAmount + deliveryCharge;

    // Order Summary

    document.getElementById(
    "subtotalPrice"
    ).innerText =
    "₹" + total;

    document.getElementById(
    "discountPrice"
    ).innerText =
    "-₹" + discountAmount.toFixed(0);

    document.getElementById(
    "deliveryCharge"
    ).innerHTML =

    deliveryCharge === 0

    ? '<span style="color:green;">FREE</span>'

    : '₹50';

    document.getElementById(
    "finalPrice"
    ).innerText =
    "₹" + finalTotal.toFixed(0);

    // Coupon

    renderCoupons(total);

    // Free Delivery Progress

    updateDeliveryProgress(total);


    const totalItems =
cart.reduce(
(sum,item)=>
sum + item.qty,
0
);

document.querySelector(
".cart-header h3"
).innerHTML =
`🛒 Your Cart (${totalItems} Items)`;


}


function updateDeliveryProgress(total){

    const target = 500;

    const remaining =
    Math.max(0, target - total);

    const percent =
    Math.min(
        (total / target) * 100,
        100
    );

    document.getElementById(
        "progressFill"
    ).style.width =
    percent + "%";

    document.getElementById(
        "deliveryText"
    ).innerHTML =

    remaining > 0

    ? `🚚 Add ₹${remaining} more for FREE Delivery`

    : `🎉 Congratulations! FREE Delivery Unlocked`;


}

function applyCoupon(code,discount){

    if(appliedCoupon === code){

        appliedCoupon = "";
        appliedDiscount = 0;

    }else{

        appliedCoupon = code;
        appliedDiscount = discount;

    }

    updateCartUI();

}

function openCheckout(){

    document
    .getElementById(
    "checkoutModal"
    )
    .classList
    .add("active");

}

function generateOrderId(){

    const now = new Date();

    const date =
        now.getFullYear() +
        String(now.getMonth() + 1).padStart(2, "0") +
        String(now.getDate()).padStart(2, "0");

    const time =
        String(now.getHours()).padStart(2, "0") +
        String(now.getMinutes()).padStart(2, "0") +
        String(now.getSeconds()).padStart(2, "0");

    return `CBP-${date}-${time}`;

}

function saveOrder(order){

    let orders =
        JSON.parse(
            localStorage.getItem("coffeeOrders")
        ) || [];

    orders.unshift(order);

    localStorage.setItem(
        "coffeeOrders",
        JSON.stringify(orders)
    );

}

function placeOrder(){

    // =========================
    // CUSTOMER DETAILS
    // =========================

    const name =
        document.getElementById(
            "customerName"
        ).value.trim();

    const mobile =
        document.getElementById(
            "customerMobile"
        ).value.trim();

    const address =
        document.getElementById(
            "customerAddress"
        ).value.trim();


    // =========================
    // VALIDATION
    // =========================

    if(!name){

        alert("Please enter your name.");

        document
        .getElementById("customerName")
        .focus();

        return;
    }


    if(!mobile){

        alert("Please enter your mobile number.");

        document
        .getElementById("customerMobile")
        .focus();

        return;
    }


    if(!/^[0-9]{10}$/.test(mobile)){

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        document
        .getElementById("customerMobile")
        .focus();

        return;
    }


    if(!address){

        alert("Please enter your delivery address.");

        document
        .getElementById("customerAddress")
        .focus();

        return;
    }


    // =========================
    // CART CHECK
    // =========================

    if(!cart || cart.length === 0){

        alert("Your cart is empty.");

        return;
    }


    // =========================
    // ORDER ID
    // =========================

    const orderId =
    generateOrderId();

currentOrderId = orderId;

    // =========================
    // CALCULATE SUBTOTAL
    // =========================

    let total = 0;

    cart.forEach(item => {

        total +=
            item.price * item.qty;

    });


    // =========================
    // DISCOUNT
    // =========================

    let discountAmount = 0;

    if(
        typeof appliedDiscount !== "undefined" &&
        appliedDiscount > 0
    ){

        discountAmount =
            (total * appliedDiscount) / 100;

    }


    // =========================
    // FINAL TOTAL
    // =========================

    let finalTotal =
        total - discountAmount;


    // =========================
    // CREATE ORDER OBJECT
    // =========================

    const order = {

        orderId: orderId,

        date:
            new Date().toISOString(),

        customer: {

            name: name,

            mobile: mobile,

            address: address

        },

        items:

            cart.map(item => ({

                name: item.name,

                price: item.price,

                qty: item.qty

            })),

        subtotal: total,

        discount: discountAmount,

        total: finalTotal,

        coupon:
            typeof appliedCoupon !== "undefined"
            ? appliedCoupon
            : "",

        status: "Order Placed"

    };


    // =========================
    // SAVE ORDER
    // =========================

    saveOrder(order);


    // =========================
    // WHATSAPP MESSAGE
    // =========================

    let orderText =
        "☕ *Coffee Bar Point Order*\n\n";


    orderText +=
        `🆔 Order ID: ${orderId}\n\n`;


    // ITEMS

    cart.forEach(item => {

        orderText +=
            `${item.name} × ${item.qty} = ₹${
                item.price * item.qty
            }\n`;

    });


    // PRICE DETAILS

    orderText +=
        `\nSubtotal: ₹${total}`;


    if(discountAmount > 0){

        orderText +=
            `\nDiscount: -₹${
                discountAmount.toFixed(0)
            }`;

    }


    if(
        typeof appliedCoupon !== "undefined" &&
        appliedCoupon
    ){

        orderText +=
            `\nCoupon: ${appliedCoupon}`;

    }


    orderText +=
        `\nTotal: ₹${finalTotal.toFixed(0)}`;


    // CUSTOMER DETAILS

    orderText +=
        `\n\n👤 Name: ${name}`;

    orderText +=
        `\n📱 Mobile: ${mobile}`;

    orderText +=
        `\n📍 Address: ${address}`;


    // ORDER STATUS

    orderText +=
        `\n\n🟡 Status: Order Placed`;


    // =========================
    // WHATSAPP
    // =========================

    const whatsappNumber =
        "917355346438";


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${
            encodeURIComponent(orderText)
        }`;


    window.open(
        whatsappURL,
        "_blank"
    );


    // =========================
    // SUCCESS POPUP
    // =========================

    document
        .getElementById("successPopup")
        .classList
        .add("active");


    // =========================
    // OPTIONAL:
    // SHOW ORDER ID IN POPUP
    // =========================

    const orderIdElement =
        document.getElementById(
            "successOrderId"
        );


    if(orderIdElement){

        orderIdElement.innerText =
            orderId;

    }

}

function closeSuccessPopup(){

    document
    .getElementById("successPopup")
    .classList
    .remove("active");

}
function continueShopping(){

    window.location.href = "index.html";

}

function trackCurrentOrder(){

    if(!currentOrderId){

        alert("Order information not found.");

        return;

    }

    document.getElementById(
        "trackingOrderId"
    ).innerText =
        currentOrderId;

    document.getElementById(
        "trackingModal"
    ).classList.add("active");

}

function closeTrackingModal(){

    document.getElementById(
        "trackingModal"
    ).classList.remove("active");

}