// Popular parties cards
const popular_parties_container = document.querySelector(
    "#popular-parties .cards-container"
);
const parties_container = document.querySelector(
    "#package-offers .cards-container"
);
const gallery = document.querySelector("#gallery");
popular_parties.forEach((party) => {
    popular_parties_container.innerHTML += `

        <div class="card" style="    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url(${party.img}) no-repeat center / cover, lightgray -22.3px -8px / 112.389% 101.61% no-repeat;">
            <div class="text-div">
                <p class="people">${party.people}</p>
                <h1 class="name">${party.name}</h1>
                <div class="extra-info">
                    <p><i class="fa-solid fa-globe"></i> ${party.space}</p>
                    <p><i class="fa-solid fa-money-bill"></i> ${party.price}</p>
                </div>
                <p class="about">
                    ${party.about}
                </p>
                <button>Read More</button>
            </div>
        </div>

    `;
});

parties.forEach((party) => {
    parties_container.innerHTML += `

        <div class="card" style="    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url(${party.img}) no-repeat center / cover, lightgray -22.3px -8px / 112.389% 101.61% no-repeat;">
            <div class="text-div">
                <p class="people">${party.people}</p>
                <h1 class="name">${party.name}</h1>
                <div class="extra-info">
                    <p><i class="fa-solid fa-globe"></i> ${party.space}</p>
                    <p><i class="fa-solid fa-money-bill"></i> ${party.price}</p>
                </div>
                <p class="about">
                    ${party.about}
                </p>
                <button>Read More</button>
            </div>
        </div>

    `;
});
// Navigation menu toggler
const menu_btn = document.getElementById("menu");
const menu = document.querySelector("header nav .navigation");
menu_btn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Window eventlistener
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    menu.classList.remove("active");
    if (window.scrollY > 700) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
});