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
const logo = document.querySelector(".logo");
const nav_links = document.querySelectorAll("header nav .navigation a");
const header_popular = document.querySelector("#popular-parties .heading");
const header_parties = document.querySelector("#package-offers .heading");
const parties_cards = document.querySelectorAll(
    "#package-offers .cards-container .card"
);
const gallery_heading = document.querySelector("#gallery .heading");
const gallery_items = document.querySelectorAll(
    "#gallery .image-container .image"
);

window.addEventListener("scroll", () => {
    const triggerBottom = (window.innerHeight / 5) * 4.5;

    let header_popular_top = header_popular.getBoundingClientRect().top;
    if (header_popular_top < triggerBottom) {
        header_popular.classList.add("show");
    } else {
        header_popular.classList.remove("show");
    }

    let popular_parties_container_top =
        popular_parties_container.getBoundingClientRect().top;
    if (popular_parties_container_top < triggerBottom) {
        popular_parties_container.classList.add("show");
    } else {
        popular_parties_container.classList.remove("show");
    }

    let header_parties_top = header_parties.getBoundingClientRect().top;
    if (header_parties_top < triggerBottom) {
        header_parties.classList.add("show");
    } else {
        header_parties.classList.remove("show");
    }

    parties_cards.forEach((parties_container) => {
        let parties_container_top = parties_container.getBoundingClientRect().top;
        if (parties_container_top < triggerBottom) {
            parties_container.classList.add("show");
        } else {
            parties_container.classList.remove("show");
        }
    });

    let gallery_heading_top = gallery_heading.getBoundingClientRect().top;
    if (gallery_heading_top < triggerBottom) {
        gallery_heading.classList.add("show");
    } else {
        gallery_heading.classList.remove("show");
    }

    gallery_items.forEach((item) => {
        let item_top = item.getBoundingClientRect().top;
        if (item_top < triggerBottom) {
            item.classList.add("show");
        } else {
            item.classList.remove("show");
        }
    });

    // Nav animation
    menu.classList.remove("active");
    if (window.scrollY > 120) {
        nav.classList.add("active");
        logo.classList.add("active");
        nav_links.forEach((nav_link) => {
            nav_link.classList.add("active");
        });
    } else {
        nav.classList.remove("active");
        logo.classList.remove("active");
        nav_links.forEach((nav_link) => {
            nav_link.classList.remove("active");
        });
    }
});