document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function (event) {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            event.preventDefault(); 
            alert("Email không hợp lệ! Vui lòng nhập đúng định dạng (ví dụ: example@gmail.com)");
            emailInput.focus();
        } else {
            alert("Email hợp lệ! Form sẽ được gửi đi.");
        }
    });
});
