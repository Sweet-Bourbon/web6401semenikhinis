document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    form.addEventListener('submit', function(event) {
        let isValid = true;
        
        // Валидация имени
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            alert('Пожалуйста, введите ваше имя.');
            isValid = false;
        }
        
        // Валидация email
        const emailInput = document.getElementById('email');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert('Пожалуйста, введите корректный адрес электронной почты.');
            isValid = false;
        }
        
        // Валидация сообщения
        const messageInput = document.getElementById('message');
        if (messageInput.value.trim() === '') {
            alert('Пожалуйста, введите ваше сообщение.');
            isValid = false;
        }
        
        // Если форма не прошла валидацию, предотвращаем отправку формы
        if (!isValid) {
            event.preventDefault();
        }
    });
});