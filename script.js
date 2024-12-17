// مثال بسيط لتفعيل بعض التأثيرات (إذا لزم الأمر)
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.hero button');
    button.addEventListener('click', () => {
        alert("تم إرسال طلبك!");
    });
});
