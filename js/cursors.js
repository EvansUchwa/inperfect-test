let cursorOnBanner = false;
let cursorOnNav = false;
let cursorOnAfterBanner = false;
let bannerCursorLastPosition = 0;
let homeBanner = document.getElementById("homeBanner");
let homeAfterBanner = document.getElementById("homeAfterBanner");

let nav = document.querySelector("nav");

let cursorFollower1 = document.getElementById("cursorFollower1");
let cursorFollower2 = document.getElementById("cursorFollower2");
let cursorFollower3 = document.getElementById("cursorFollower3");

nav.addEventListener("mouseenter", function () {
    cursorOnNav = true;
});
nav.addEventListener("mouseleave", function () {
    cursorOnNav = false;
});

homeBanner.addEventListener("mouseenter", function () {
    cursorOnBanner = true;
});
homeBanner.addEventListener("mouseleave", function () {
    document.getElementById("cursorFollower1").style.backgroundColor =
        "transparent";
    cursorOnBanner = false;
});

homeAfterBanner.addEventListener("mouseenter", function () {
    cursorFollower2.style.transform = "translate(-50%,-50%) scale(1.5)";
    cursorOnAfterBanner = true;
});
homeAfterBanner.addEventListener("mouseleave", function () {
    cursorFollower2.style.left = "50%";
    cursorFollower2.style.top = "50%";
    cursorFollower2.style.transform = "translate(-50%,-50%) scale(1)";

    cursorOnAfterBanner = false;
});



let afterBannerWidth =
    document.getElementById("homeAfterBanner").clientWidth;
let afterBannerWidthCenter = afterBannerWidth / 2;

document.addEventListener("mousemove", function (e) {
    let left = e.clientX - homeBanner.offsetLeft;
    let top = e.clientY - homeBanner.offsetTop;
    if (cursorOnBanner) {
        cursorFollower1.style.backgroundColor = "var(--color-terciary)";
        cursorFollower1.style.left = left + 3 + "px";
        cursorFollower1.style.top = top - 10 + "px";
        bannerCursorLastPosition = left;
    }

    if (cursorOnAfterBanner) {
        // cursorFollower2.style.transform = "translate3d(" + left + "px, " + top + "px, 0px) scale3d(2, 2, 1)";
        cursorFollower2.style.left = left + 3 + "px";
        cursorFollower2.style.top = top - 10 + "px";

    }

    if (cursorOnNav) {
        const allRoutes = document.querySelectorAll(".nl-route a");
        for (var i = 0; i < allRoutes.length; i++) {
            allRoutes[i].addEventListener("mouseenter", function () {
                cursorFollower3.classList.add("routeHover");
                cursorFollower3.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z"/></svg>`;
            });

            allRoutes[i].addEventListener("mouseleave", function () {
                cursorFollower3.classList.remove("routeHover");
                cursorFollower3.innerHTML = "";
            });
        }
        document.getElementById("cursorFollower3").style.backgroundColor =
            "var(--color-terciary)";
        cursorFollower3.style.left = left + 10 + "px";
        cursorFollower3.style.top = top - 40 + "px";
        bannerCursorLastPosition = left;
    }
});