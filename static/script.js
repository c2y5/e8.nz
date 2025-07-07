window.addEventListener("load", function() {
    setTimeout(function() {
        document.body.classList.add("loaded");
        setTimeout(function() {
            const loader = document.querySelector(".loader-container");
            if (loader) loader.remove();
        }, 300);
    }, 1000);
});

document.querySelector(".mobile-menu-btn").addEventListener("click", function() {
    document.querySelector(".mobile-menu").classList.toggle("open");
});