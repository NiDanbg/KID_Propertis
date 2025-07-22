document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.querySelector('nav');

    if(hamburger && nav){
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    const translations = {
        en: {
            meta_title: "Order Almanac 'Bulgaria from A to Z'", // Променен title за тази страница
            meta_description: "Order the Almanac 'Bulgaria from A to Z' - a unique edition presenting Bulgarian history, culture, and achievements. The perfect gift.",
            // ... съществуващите ви преводи ...
            nav_about: "About", nav_excerpts: "Excerpts", nav_story: "The Story", nav_order: "Order Now", hero_title: "ALMANAC: Bulgaria from “A” to “Z”", hero_subtitle: "A vivid portrait of our country, worthy of pride and self-confidence.", hero_button: "Order Your Copy", about_title: "Dear Readers,", about_text: "The 'BULGARIA from “A” to “Z”' Almanac aims to showcase Bulgaria's unique cultural, historical, scientific, and natural heritage...", excerpts_title: "Did You Know That?", card_a_title: "A - ABAGAR", card_a_text: "What is the first Bulgarian printed book and why is it named after an ancient king healed by Christ?", card_b_title: "B - BOYANA MASTER", card_b_text: "Whose frescoes preceded the Italian Renaissance by decades and are considered harbingers of a new art in Europe?", card_v_title: "V - THE VARNA GOLD TREASURE", card_v_text: "You may have heard that the oldest worked gold in the world was found in Bulgaria and dates back to 4600-4200 BC!", excerpts_footer: "These are just a few of over 250 inspiring topics. Discover the rest!", story_title: "A Project Born of Pride and Creativity", story_KiD_title: "Initiator and IP Holder", story_KiD_text: "As the initiator and holder of all intellectual property, KiD Properties turned a bold idea into reality...", story_pride_title: "Conceptual and Inspirational Partner", story_pride_text: "At the heart of this almanac is the cause of the 'Bulgarian Pride' Foundation...", story_atlas_title: "Main Sponsor", story_atlas_text: "The creation of this large-scale project was made possible by the generous support of 'ATLAS INTERNAZIONALE,'...", story_kota_title: "Publisher and Print Master", story_kota_text: "To turn the vision into a physical gem, KOTA Publishing House took charge...", order_title_new: "Ready to Own this Gem?", order_subtitle_new: "Gift yourself knowledge, pride, and beauty. Every page is a journey.", order_button_new: "PROCEED TO ORDER PAGE",
            
            // --- НОВИ ПРЕВОДИ ЗА СТРАНИЦАТА ЗА ПОРЪЧКИ ---
            order_page_title: "Order Form",
            order_summary_title: "Your Order:",
            order_price: "Price: 42 EUR",
            delivery_note: "The delivery cost is charged additionally by your chosen courier.",
            form_desc: "Please fill out this form to order the Almanac. We will contact you shortly for confirmation.",
            form_names: "Your Names *",
            form_phone: "Contact Phone Number *",
            form_email: "Email for Confirmation *",
            form_courier: "Courier Delivery *",
            form_address: "Delivery Address *",
            form_address_placeholder: "Courier office or exact address",
            form_quantity: "Quantity *",
            form_payment_info: "Payment Method:",
            form_payment_value: "Cash on Delivery",
            form_invoice: "I want an invoice *",
            form_invoice_yes: "Yes",
            form_invoice_no: "No",
            form_note: "Note",
            form_button: "SUBMIT ORDER",
            form_status_sending: "Sending...",
            form_status_success: "Thank you! Your order has been successfully received.",
            form_status_error: "An error occurred. Please try again or contact us.",
            back_link: "← Back to Home Page",
            // --- Край на новите преводи ---

            form_footer: "Orders are processed by KiD Properties. Thank you for supporting Bulgarian culture!",
            footer_copyright: "© 2024 KiD Properties. All rights reserved.",
        },
        bg: {
            meta_title: "Поръчка на Алманах 'България от А до Я'", // Променен title за тази страница
            meta_description: "Поръчайте Алманах 'България от А до Я' - уникално издание, представящо българската история, култура и достижения. Идеален подарък.",
            // ... съществуващите ви преводи ...
            nav_about: "За Алманаха", nav_excerpts: "Откъси", nav_story: "Историята зад проекта", nav_order: "Поръчай", hero_title: "АЛМАНАХ: България от „А“ до „Я“", hero_subtitle: "Жив образ на нашата страна, достоен за гордост и самочувствие.", hero_button: "Поръчай своя екземпляр", about_title: "Скъпи читатели,", about_text: "Алманахът „БЪЛГАРИЯ от „А“ до „Я“ има за цел да представи България в цялата й културна, историческа, научна и природна уникалност...", excerpts_title: "Знаете ли че?", card_a_title: "А - АБАГАР", card_a_text: "Коя е първата българска печатна книга и защо е кръстена на древен цар, изцелен от Христос?", card_b_title: "Б - БОЯНСКИЯТ МАЙСТОР", card_b_text: "Чии стенописи изпреварват италианския Ренесанс с десетилетия...?", card_v_title: "В - ВАРНЕНСКОТО ЗЛАТНО СЪКРОВИЩЕ", card_v_text: "Може би сте чули, че най-старото обработено злато в света е открито в България и датира от 4600-4200 г. пр.Хр.!", excerpts_footer: "Това са само част от над 250 вдъхновяващи теми. Открийте останалите!", story_title: "Един проект, роден от гордост и съзидателност", story_KiD_title: "Инициатор и Носител на правата", story_KiD_text: "Като инициатор и носител на цялата интелектуална собственост, КиД Пропъртис превърна една смела идея в реалност...", story_pride_title: "Идеен Носител и Вдъхновител", story_pride_text: "В основата на този алманах стои каузата на Фондация „Българска гордост“...", story_atlas_title: "Основен Спонсор", story_atlas_text: "Създаването на този мащабен проект стана възможно благодарение на щедрата подкрепа на фирма „АТЛАС ИНТЕРНАЦИОНАЛЕ“...", story_kota_title: "Издател и Майстор на Печата", story_kota_text: "За да може визията да се превърне във физическо бижу, се погрижиха от издателство КОТА...", order_title_new: "Готови ли сте да притежавате това бижу?", order_subtitle_new: "Направете си подарък знание, гордост и красота. Всяка страница е пътешествие.", order_button_new: "КЪМ СТРАНИЦАТА ЗА ПОРЪЧКИ",

            // --- НОВИ ПРЕВОДИ ЗА СТРАНИЦАТА ЗА ПОРЪЧКИ ---
            order_page_title: "Формуляр за поръчка",
            order_summary_title: "Вашата поръчка:",
            order_price: "Цена: 42 EUR",
            delivery_note: "Цената на доставка се начислява допълнително от избрания от Вас куриер.",
            form_desc: "Попълнете този формуляр, за да поръчате книгата 'Алманах - България от А до Я'. Ще се свържем с вас за потвърждение.",
            form_names: "Вашите имена *",
            form_phone: "Телефонен номер за връзка *",
            form_email: "Имейл за потвърждение *",
            form_courier: "Доставка с куриер *",
            form_address: "Адрес за доставка *",
            form_address_placeholder: "Офис на куриер или точен адрес",
            form_quantity: "Брой екземпляри *",
            form_payment_info: "Начин на плащане:",
            form_payment_value: "Наложен платеж при доставка",
            form_invoice: "Желая фактура *",
            form_invoice_yes: "Да",
            form_invoice_no: "Не",
            form_note: "Забележка",
            form_button: "ИЗПРАТИ ПОРЪЧКАТА",
            form_status_sending: "Изпращане...",
            form_status_success: "Благодаря! Вашата поръчка е приета успешно.",
            form_status_error: "Възникна грешка. Моля, опитайте отново или се свържете с нас.",
            back_link: "← Връщане към началната страница",
            // --- Край на новите преводи ---

            form_footer: "Поръчките се обработват от КиД Пропъртис. Благодарим ви, че подкрепяте българската култура!",
            footer_copyright: "© 2025 КиД Пропъртис. Всички права запазени.",
        }
    };

    const langBgBtn = document.getElementById('lang-bg');
    const langEnBtn = document.getElementById('lang-en');

    const setLanguage = (lang) => {
        localStorage.setItem('siteLang', lang); // <-- ДОБАВЕН РЕД, за да помни езика

        if (translations[lang]) {
            // Различно заглавие за различните страници
            if (document.getElementById('order-form')) {
                document.title = translations[lang].meta_title_order || translations[lang].meta_title;
            } else {
                 document.title = translations[lang].meta_title;
            }
           
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

        if(langBgBtn && langEnBtn){
            langBgBtn.classList.toggle('active', lang === 'bg');
            langEnBtn.classList.toggle('active', lang === 'en');
        }
    };

    if(langBgBtn && langEnBtn){
        langBgBtn.addEventListener('click', () => setLanguage('bg'));
        langEnBtn.addEventListener('click', () => setLanguage('en'));
    }
    
    // Зарежда запазения език или български по подразбиране
    const savedLang = localStorage.getItem('siteLang') || 'bg';
    setLanguage(savedLang);
});