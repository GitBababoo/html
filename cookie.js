
function toggleCookieSettings() {
    const cookiePopupInfo = document.getElementById('CookiePopupInfo');
    if (cookiePopupInfo.style.display === 'none' || cookiePopupInfo.style.display === '') {
        cookiePopupInfo.style.display = 'block';
    } else {
        cookiePopupInfo.style.display = 'none';
    }
}

// Accept all cookies and hide the cookie policy modal
function acceptAllCookies() {
    // Hide the cookie policy modal
    document.getElementById('CookiePolicy').style.display = 'none';
    alert('All cookies have been accepted!'); // Show confirmation message
}

// Event listeners for buttons
document.getElementById('CookiePopupSettings').addEventListener('click', toggleCookieSettings);
document.querySelector('.AcceptAllCookies').addEventListener('click', acceptAllCookies);

