document.addEventListener('DOMContentLoaded', () => {

    // --- ОБЩ КОД ЗА ВСИЧКИ СТРАНИЦИ ---

    const translations = {
        en: {
            // ... (всички ваши английски преводи са тук, няма нужда да ги променяте) ...
            meta_title: "Order Almanac 'Bulgaria from A to Z'", meta_description: "Order the Almanac 'Bulgaria from A to Z' - a unique edition presenting Bulgarian history...", nav_about: "About", nav_excerpts: "Excerpts", nav_story: "The Story", nav_order: "Order Now", hero_title: "ALMANAC: Bulgaria from “A” to “Z”", hero_subtitle: "A vivid portrait of our country...", hero_button: "Order Your Copy", about_title: "Dear Readers,", about_text: "The 'BULGARIA from “A” to “Z”' Almanac aims to showcase Bulgaria's unique cultural...", excerpts_title: "Did You Know That?", card_a_title: "A - ABAGAR", card_a_text: "What is the first Bulgarian printed book...?", card_b_title: "B - BOYANA MASTER", card_b_text: "Whose frescoes preceded the Italian Renaissance...?", card_v_title: "V - THE VARNA GOLD TREASURE", card_v_text: "You may have heard that the oldest worked gold...", excerpts_footer: "These are just a few of over 250 inspiring topics...", story_title: "A Project Born of Pride and Creativity", story_KiD_title: "Initiator and IP Holder", story_KiD_text: "As the initiator and holder of all intellectual property...", story_pride_title: "Conceptual and Inspirational Partner", story_pride_text: "At the heart of this almanac is the cause of the 'Bulgarian Pride' Foundation...", story_atlas_title: "Main Sponsor", story_atlas_text: "The creation of this large-scale project was made possible by...", story_kota_title: "Publisher and Print Master", story_kota_text: "To turn the vision into a physical gem...", order_title_new: "Ready to Own this Gem?", order_subtitle_new: "Gift yourself knowledge, pride, and beauty...", order_button_new: "PROCEED TO ORDER PAGE", order_page_title: "Order Form", order_summary_title: "Your Order:", order_price: "Price: 42 EUR", delivery_note: "The delivery cost is charged additionally by your chosen courier.", form_desc: "Please fill out this form to order the Almanac...", form_names: "Your Names *", form_phone: "Contact Phone Number *", form_email: "Email for Confirmation *", form_courier: "Courier Delivery *", form_address: "Delivery Address *", form_address_placeholder: "Courier office or exact address", form_quantity: "Quantity *", form_payment_info: "Payment Method:", form_payment_value: "Cash on Delivery", form_invoice: "I want an invoice *", form_invoice_yes: "Yes", form_invoice_no: "No", form_note: "Note", form_button: "SUBMIT ORDER", form_status_sending: "Sending...", form_status_success: "Thank you! Your order has been successfully received.", form_status_error: "An error occurred. Please try again or contact us.", back_link: "← Back to Home Page", form_footer: "Orders are processed by KiD Properties...", footer_copyright: "© 2024 KiD Properties. All rights reserved.",
        },
        bg: {
            // ... (всички ваши български преводи са тук, няма нужда да ги променяте) ...
            meta_title: "Поръчка на Алманах 'България от А до Я'", meta_description: "Поръчайте Алманах 'България от А до Я' - уникално издание...", nav_about: "За Алманаха", nav_excerpts: "Откъси", nav_story: "Историята зад проекта", nav_order: "Поръчай", hero_title: "АЛМАНАХ: България от „А“ до „Я“", hero_subtitle: "Жив образ на нашата страна...", hero_button: "Поръчай своя екземпляр", about_title: "Скъпи читатели,", about_text: "Алманахът „БЪЛГАРИЯ от „А“ до „Я“ има за цел...", excerpts_title: "Знаете ли че?", card_a_title: "А - АБАГАР", card_a_text: "Коя е първата българска печатна книга...?", card_b_title: "Б - БОЯНСКИЯТ МАЙСТОР", card_b_text: "Чии стенописи изпреварват италианския Ренесанс...?", card_v_title: "В - ВАРНЕНСКОТО ЗЛАТНО СЪКРОВИЩЕ", card_v_text: "Може би сте чули, че най-старото обработено злато...", excerpts_footer: "Това са само част от над 250 вдъхновяващи теми...", story_title: "Един проект, роден от гордост и съзидателност", story_KiD_title: "Инициатор и Носител на правата", story_KiD_text: "Като инициатор и носител на цялата интелектуална собственост...", story_pride_title: "Идеен Носител и Вдъхновител", story_pride_text: "В основата на този алманах стои каузата...", story_atlas_title: "Основен Спонсор", story_atlas_text: "Създаването на този мащабен проект стана възможно...", story_kota_title: "Издател и Майстор на Печата", story_kota_text: "За да може визията да се превърне във физическо бижу...", order_title_new: "Готови ли сте да притежавате това бижу?", order_subtitle_new: "Направете си подарък знание, гордост и красота...", order_button_new: "КЪМ СТРАНИЦАТА ЗА ПОРЪЧКИ", order_page_title: "Формуляр за поръчка", order_summary_title: "Вашата поръчка:", order_price: "Цена: 42 EUR", delivery_note: "Цената на доставка се начислява допълнително от избрания от Вас куриер.", form_desc: "Попълнете този формуляр, за да поръчате книгата...", form_names: "Вашите имена *", form_phone: "Телефонен номер за връзка *", form_email: "Имейл за потвърждение *", form_courier: "Доставка с куриер *", form_address: "Адрес за доставка *", form_address_placeholder: "Офис на куриер или точен адрес", form_quantity: "Брой екземпляри *", form_payment_info: "Начин на плащане:", form_payment_value: "Наложен платеж при доставка", form_invoice: "Желая фактура *", form_invoice_yes: "Да", form_invoice_no: "Не", form_note: "Забележка", form_button: "ИЗПРАТИ ПОРЪЧКАТА", form_status_sending: "Изпращане...", form_status_success: "Благодаря! Вашата поръчка е приета успешно.", form_status_error: "Възникна грешка. Моля, опитайте отново или се свържете с нас.", back_link: "← Връщане към началната страница", form_footer: "Поръчките се обработват от КиД Пропъртис...", footer_copyright: "© 2025 КиД Пропъртис. Всички права запазени.",
        }
    };

    const langBgBtn = document.getElementById('lang-bg');
    const langEnBtn = document.getElementById('lang-en');

    const setLanguage = (lang) => {
        localStorage.setItem('siteLang', lang);

        if (translations[lang]) {
            document.title = translations[lang].meta_title;
            const metaDescription = document.getElementById('meta-description');
            if (metaDescription) { metaDescription.setAttribute('content', translations[lang].meta_description); }
        }

        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                const placeholderKey = key + '_placeholder';
                if (el.tagName === 'TEXTAREA' && translations[lang][placeholderKey]) {
                    el.placeholder = translations[lang][placeholderKey];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        if (langBgBtn && langEnBtn) {
            langBgBtn.classList.toggle('active', lang === 'bg');
            langEnBtn.classList.toggle('active', lang === 'en');
        }
    };

    if (langBgBtn && langEnBtn) {
        langBgBtn.addEventListener('click', () => setLanguage('bg'));
        langEnBtn.addEventListener('click', () => setLanguage('en'));
    }

    const savedLang = localStorage.getItem('siteLang') || 'bg';
    setLanguage(savedLang);

    // --- КОД САМО ЗА index.html ---
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.querySelector('nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // --- КОД САМО ЗА order-page.html ---
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const statusDiv = document.getElementById('form-status');
            const currentLang = document.documentElement.lang || 'bg';

            statusDiv.textContent = translations[currentLang].form_status_sending;
            statusDiv.style.color = 'black';

            const formData = new FormData(orderForm);
            const names = formData.get('names');
            const phone = formData.get('phone');
            const email = formData.get('email');
            const courier = formData.get('courier');
            const address = formData.get('address');
            const quantity = formData.get('quantity');
            const payment = formData.get('payment');
            const invoice = formData.get('invoice');
            const note = formData.get('note');

            const entryIds = {
                names: "entry.89307205", phone: "entry.1722925538", email: "entry.697324484",
                courier: "entry.2145072218", address: "entry.293287593", quantity: "entry.742355568",
                payment: "entry.694080229", invoice: "entry.13526587", note: "entry.148651326"
            };
            const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSe_0q29Xmt3OxGZrHUjR6EK4WsOc3fLSnv8rVs4C43v60J9uw/formResponse?${entryIds.names}=${encodeURIComponent(names)}&${entryIds.phone}=${encodeURIComponent(phone)}&${entryIds.email}=${encodeURIComponent(email)}&${entryIds.courier}=${encodeURIComponent(courier)}&${entryIds.address}=${encodeURIComponent(address)}&${entryIds.quantity}=${encodeURIComponent(quantity)}&${entryIds.payment}=${encodeURIComponent(payment)}&${entryIds.invoice}=${encodeURIComponent(invoice)}&${entryIds.note}=${encodeURIComponent(note)}`;

            try {
                await fetch(formUrl, { method: 'POST', mode: 'no-cors' });
                statusDiv.textContent = translations[currentLang].form_status_success;
                statusDiv.style.color = 'green';
                orderForm.reset();
            } catch (error) {
                statusDiv.textContent = translations[currentLang].form_status_error;
                statusDiv.style.color = 'red';
            }
        });
    }
});