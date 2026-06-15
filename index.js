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

    if(!statsSection) return;

    const startCounter = () => {

        counters.forEach(counter => {

            const target =
            parseInt(
            counter.dataset.target
            );

            let count = 0;

            const speed = target / 100;

            const updateCounter = () => {

                if(count < target){

                    count += speed;

                    counter.innerText =
                    Math.ceil(count);

                    requestAnimationFrame(
                    updateCounter
                    );

                }else{

                    if(target === 5000){
                        counter.innerText =
                        "5000+";
                    }

                    else if(target === 50){
                        counter.innerText =
                        "50+";
                    }

                    else if(target === 100){
                        counter.innerText =
                        "100%";
                    }

                    else if(target === 5){
                        counter.innerText =
                        "5★";
                    }

                }

            };

            updateCounter();

        });

    };

    const observer =
    new IntersectionObserver(
    (entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                startCounter();

                observer.unobserve(
                statsSection
                );

            }

        });

    }, {
        threshold:0.4
    });

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

<button class="order-btn">
Order Now
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