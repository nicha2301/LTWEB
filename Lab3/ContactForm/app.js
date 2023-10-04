document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const fullNameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const reasonInput = document.getElementById("reason");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Kiểm tra tên đầy đủ
        if (fullNameInput.value.trim() === "") {
            isValid = false;
            alert("Please enter your full name.");
        }

        // Kiểm tra email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            isValid = false;
            alert("Please enter a valid email address.");
        }

        // Kiểm tra số điện thoại
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            isValid = false;
            alert("Please enter a valid phone number (10 digits).");
        }

        // Kiểm tra lý do liên hệ
        if (reasonInput.value === "") {
            isValid = false;
            alert("Please choose a reason for contact.");
        }

        // Kiểm tra tin nhắn
        if (messageInput.value.trim() === "") {
            isValid = false;
            alert("Please enter your message.");
        }

        if (!isValid) {
            event.preventDefault(); // Ngăn chặn việc gửi form nếu dữ liệu không hợp lệ
        }
    });
});


