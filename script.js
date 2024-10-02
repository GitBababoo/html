document.getElementById("settingsButton").addEventListener("click", function() {
    // แสดง popup
    document.getElementById("cookiePopup").style.display = "block";
});

// ปิด popup เมื่อคลิกที่ปุ่มปิด
document.querySelector(".CookiePopup__close").addEventListener("click", function() {
    document.getElementById("cookiePopup").style.display = "none";
});
