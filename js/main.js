var callback = function () {
    var el = document.querySelector('.contact-slideout__mobile-menu');
    el.addEventListener("click", displayMobileMenu);
};

var displayMobileMenu = function () {
    console.log('display mobile menu');
    var mobileNavElement = document.querySelector('.mobile-nav'),
        menuElement = document.querySelector('.contact-slideout__mobile-menu'),
        textElement;
    if (!mobileNavElement || !menuElement) {
        return;
    }
    menuIcon = menuElement.getElementsByTagName('i')[0];
    textElement = menuElement.getElementsByTagName('span')[0];
    if (mobileNavElement.classList.contains('active')) {
        mobileNavElement.classList.remove("active");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
        textElement.innerHTML = "Menu";
    } else {
        mobileNavElement.classList.add("active");
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
        textElement.innerHTML = "Close";
    }
};

// Checks if the dom is already loaded and invoke DOM Load callback
if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    callback();
} else {
    document.addEventListener("DOMContentLoaded", callback);
}