//announcement banner
const bannerId = 'announcement-banner';
const bannerDismissKey = 'bannerDismissed';

function closeBanner() {
    document.getElementById(bannerId).style.display = 'none';
    localStorage.setItem(bannerDismissKey, 'true');
}

window.onload = function () {
    const isDismissed = localStorage.getItem(bannerDismissKey);
    const banner = document.getElementById(bannerId);

    if (!isDismissed) {
        banner.style.display = 'flex'; // show it
        setTimeout(() => {
            banner.style.display = 'none';
        }, 15000); // auto-hide after 15 seconds
    } else {
        banner.style.display = 'none';
    }
}