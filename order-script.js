document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('order-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const statusDiv = document.getElementById('form-status');
        statusDiv.textContent = 'Изпращане на поръчката...';
        statusDiv.style.color = 'black';

        // 1. Вземаме данните от формата
        const formData = new FormData(form);
        const names = formData.get('names');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const courier = formData.get('courier');
        const address = formData.get('address');
        const quantity = formData.get('quantity');
        const payment = formData.get('payment');
        const invoice = formData.get('invoice');
        const note = formData.get('note');

        // 2. ID-та, извлечени от вашия линк
        const entryIds = {
            names: "entry.89307205",
            phone: "entry.1722925538",
            email: "entry.697324484",
            courier: "entry.2145072218",
            address: "entry.293287593",
            quantity: "entry.742355568",
            payment: "entry.694080229",
            invoice: "entry.13526587",
            note: "entry.148651326"
        };

        // 3. Конструиране на URL адреса
        const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSe_0q29Xmt3OxGZrHUjR6EK4WsOc3fLSnv8rVs4C43v60J9uw/formResponse?${entryIds.names}=${encodeURIComponent(names)}&${entryIds.phone}=${encodeURIComponent(phone)}&${entryIds.email}=${encodeURIComponent(email)}&${entryIds.courier}=${encodeURIComponent(courier)}&${entryIds.address}=${encodeURIComponent(address)}&${entryIds.quantity}=${encodeURIComponent(quantity)}&${entryIds.payment}=${encodeURIComponent(payment)}&${entryIds.invoice}=${encodeURIComponent(invoice)}&${entryIds.note}=${encodeURIComponent(note)}`;

        // 4. Изпращане на данните
        try {
            await fetch(formUrl, {
                method: 'POST',
                mode: 'no-cors'
            });
            statusDiv.textContent = 'Благодаря! Вашата поръчка е приета успешно.';
            statusDiv.style.color = 'green';
            form.reset();
        } catch (error) {
            statusDiv.textContent = 'Възникна грешка. Моля, опитайте отново или се свържете с нас.';
            statusDiv.style.color = 'red';
        }
    });
});