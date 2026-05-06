/* ================= DARK MODE ================= */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.onclick = () => {
        document.body.classList.toggle("dark");
    };
}

/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.onclick = () => {
        navMenu.classList.toggle("show");
    };
}

/* ================= FAQ ================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    if (question) {
        question.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    }
});

/* ================= BOOKING MODAL ================= */

const modal = document.getElementById("bookingModal");
const open1 = document.getElementById("openModal");
const open2 = document.getElementById("openModal2");
const closeModal = document.getElementById("closeModal");

if (open1 && modal) {
    open1.onclick = () => modal.classList.add("active");
}

if (open2 && modal) {
    open2.onclick = () => modal.classList.add("active");
}

if (closeModal && modal) {
    closeModal.onclick = () => modal.classList.remove("active");
}

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

/* ================= BACK TO TOP ================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (topBtn) {
        if (window.scrollY > 300) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }
    }
});

if (topBtn) {
    topBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}

/* ================= SEARCH ================= */

window.addEventListener("load", () => {

    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    const searchMsg = document.getElementById("searchMsg");

    const destinations = {
        paris: 0,
        bali: 1,
        switzerland: 2,
        dubai: 3,
        maldives: 4
    };

    if (searchBtn && searchInput && searchMsg) {

        const runSearch = () => {
            const value = searchInput.value.toLowerCase().trim();

            if (destinations[value] !== undefined) {

                if (window.swiper) {
                    window.swiper.slideToLoop(destinations[value], 800);
                    searchMsg.innerText = `Found ✓ ${value}`;
                } else {
                    searchMsg.innerText = "Slider not loaded";
                }

            } else {
                searchMsg.innerText = "Destination not found";
            }
        };

        searchBtn.addEventListener("click", runSearch);

        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                runSearch();
            }
        });
    }

    /* ================= LOADER ================= */

    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 1200);
    }

});