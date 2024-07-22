// Script for gallery

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("show-more-button");
    const images = document.querySelectorAll(".image-gallery1 img");

    let isHidden = true;

    toggleButton.addEventListener("click", function() {
        images.forEach(function(image) {
            image.style.display = isHidden ? "block" : "none";
        });

        isHidden = !isHidden;
    });
});

//script for produt

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("show-more").addEventListener("click", function () {
        // Toggle the visibility of the hiding-product div
        var hidingProductDiv = document.querySelector(".hiding-product");
        hidingProductDiv.style.display = (hidingProductDiv.style.display === "none") ? "block" : "none";
    });
});