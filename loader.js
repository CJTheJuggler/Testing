let loaderTimeout = setTimeout(() => {
    document.getElementById("juggling-loader").style.display = "block";
}, 2000);

// When page is fully loaded, remove loader (if shown)
window.addEventListener("load", () => {
    clearTimeout(loaderTimeout);
    document.getElementById("juggling-loader").style.display = "none";
});