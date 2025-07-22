document.addEventListener('DOMContentLoaded', () => {

        const hamburger = document.getElementById('hamburger-menu');
        const nav = document.querySelector('nav');

        hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        });

   const translations = {
    en: {
        meta_title: "Almanac 'Bulgaria from A to Z' - A Luxury Edition by KID Properties",
        meta_description: "Discover the Almanac 'Bulgaria from A to Z' - a unique edition presenting Bulgarian history, culture, and achievements. The perfect gift and a jewel for any library. Order now!",
        meta_keywords: "Bulgaria almanac, Bulgarian history, book about Bulgaria, luxury edition, KID Properties, gift, culture, heritage",
        nav_about: "About",
        nav_excerpts: "Excerpts",
        nav_story: "The Story",
        nav_order: "Order Now",
        hero_title: "ALMANAC: Bulgaria from “A” to “Z”",
        hero_subtitle: "A vivid portrait of our country, worthy of pride and self-confidence.",
        hero_button: "Order Your Copy",
        about_title: "Dear Readers,",
        about_text: "The 'BULGARIA from “A” to “Z”' Almanac aims to showcase Bulgaria's unique cultural, historical, scientific, and natural heritage. Its goal is to acquaint readers with inspiring personalities, remarkable achievements, and the richness of Bulgarian traditions and spirit. This almanac is an attempt to show who we are and what we have given to the world.",
        excerpts_title: "Did You Know That?",
        card_a_title: "A - ABAGAR",
        card_a_text: "What is the first Bulgarian printed book and why is it named after an ancient king healed by Christ?",
        card_b_title: "B - BOYANA MASTER",
        card_b_text: "Whose frescoes preceded the Italian Renaissance by decades and are considered harbingers of a new art in Europe?",
        card_v_title: "V - THE VARNA GOLD TREASURE",
        card_v_text: "You may have heard that the oldest worked gold in the world was found in Bulgaria and dates back to 4600-4200 BC!",
        excerpts_footer: "These are just a few of over 250 inspiring topics. Discover the rest!",
        story_title: "A Project Born of Pride and Creativity",
        story_KiD_title: "Initiator and IP Holder",
        story_KiD_text: "As the initiator and holder of all intellectual property, KiD Properties turned a bold idea into reality. Our goal was to create not just a book, but a cultural legacy that inspires and educates.",
        story_pride_title: "Conceptual and Inspirational Partner",
        story_pride_text: "At the heart of this almanac is the cause of the 'Bulgarian Pride' Foundation – to preserve and promote the brightest moments of our history and to revive national self-esteem.",
        story_atlas_title: "Main Sponsor",
        story_atlas_text: "The creation of this large-scale project was made possible by the generous support of 'ATLAS INTERNAZIONALE,' which believed in the cause and invested in the preservation of Bulgarian memory.",
        story_kota_title: "Publisher and Print Master",
        story_kota_text: "To turn the vision into a physical gem, KOTA Publishing House took charge. Their expertise and precision in printing ensure that every copy of the almanac is a work of art.",
        order_title_new: "Ready to Own this Gem?",
        order_subtitle_new: "Gift yourself knowledge, pride, and beauty. Every page is a journey.",
        order_button_new: "PROCEED TO ORDER PAGE",
        form_footer: "Orders are processed by KiD Properties. Thank you for supporting Bulgarian culture!",
        footer_copyright: "© 2024 KiD Properties. All rights reserved.",
        footer_partners_text: "In partnership with:",
    },
    bg: {
        meta_title: "Алманах 'България от А до Я' - Луксозно издание от КИД Пропъртис",
        meta_description: "Открийте Алманах 'България от А до Я' - уникално издание, представящо българската история, култура и достижения. Идеален подарък и бижу за всяка библиотека. Поръчайте сега!",
        meta_keywords: "алманах България, българска история, книга за България, луксозно издание, КИД Пропъртис, подарък, култура, наследство",
        nav_about: "За Алманаха",
        nav_excerpts: "Откъси",
        nav_story: "Историята зад проекта",
        nav_order: "Поръчай",
        hero_title: "АЛМАНАХ: България от „А“ до „Я“",
        hero_subtitle: "Жив образ на нашата страна, достоен за гордост и самочувствие.",
        hero_button: "Поръчай своя екземпляр",
        about_title: "Скъпи читатели,",
        about_text: "Алманахът „БЪЛГАРИЯ от „А“ до „Я“ има за цел да представи България в цялата й културна, историческа, научна и природна уникалност, да запознае своите читатели с вдъхновяващи личности, впечатляващи достижения и богатството на българските традиции и дух. Чрез любопитни факти и интересни истории от миналото и настоящето, ще се опитаме да изградим жив образ на нашата страна, достоен за гордост и самочувствие. Този алманах е опит да покажем кои сме ние и какво сме дали на света.",
        excerpts_title: "Знаете ли че?",
        card_a_title: "А - АБАГАР",
        card_a_text: "Коя е първата българска печатна книга и защо е кръстена на древен цар, изцелен от Христос?",
        card_b_title: "Б - БОЯНСКИЯТ МАЙСТОР",
        card_b_text: "Чии стенописи изпреварват италианския Ренесанс с десетилетия и се считат за предвестници на ново изкуство в Европа?",
        card_v_title: "В - ВАРНЕНСКОТО ЗЛАТНО СЪКРОВИЩЕ",
        card_v_text: "Може би сте чули, че най-старото обработено злато в света е открито в България и датира от 4600-4200 г. пр.Хр.!",
        excerpts_footer: "Това са само част от над 250 вдъхновяващи теми. Открийте останалите!",
        story_title: "Един проект, роден от гордост и съзидателност",
        story_KiD_title: "Инициатор и Носител на правата",
        story_KiD_text: "Като инициатор и носител на цялата интелектуална собственост, КиД Пропъртис превърна една смела идея в реалност. Нашата цел беше да създадем не просто книга, а културно наследство, което да вдъхновява и образова.",
        story_pride_title: "Идеен Носител и Вдъхновител",
        story_pride_text: "В основата на този алманах стои каузата на Фондация „Българска гордост“ – да съхрани и популяризира най-светлите моменти от нашата история и да възроди националното самочувствие.",
        story_atlas_title: "Основен Спонсор",
        story_atlas_text: "Създаването на този мащабен проект стана възможно благодарение на щедрата подкрепа на фирма „АТЛАС ИНТЕРНАЦИОНАЛЕ“, която повярва в каузата и инвестира в съхранението на българската памет.",
        story_kota_title: "Издател и Майстор на Печата",
        story_kota_text: "За да може визията да се превърне във физическо бижу, се погрижиха от издателство КОТА. Тяхната експертиза и прецизност в печата гарантират, че всеки екземпляр на алманаха е произведение на изкуството.",
        order_title_new: "Готови ли сте да притежавате това бижу?",
        order_subtitle_new: "Направете си подарък знание, гордост и красота. Всяка страница е пътешествие.",
        order_button_new: "КЪМ СТРАНИЦАТА ЗА ПОРЪЧКИ",
        form_footer: "Поръчките се обработват от КиД Пропъртис. Благодарим ви, че подкрепяте българската култура!",
        footer_copyright: "© 2025 КиД Пропъртис. Всички права запазени.",
        footer_partners_text: "В партньорство с:",
    }
};

    const langBgBtn = document.getElementById('lang-bg');
    const langEnBtn = document.getElementById('lang-en');

    const setLanguage = (lang) => {
        if (translations[lang]) {
        document.title = translations[lang].meta_title;
        const metaDescription = document.getElementById('meta-description');
        const metaKeywords = document.getElementById('meta-keywords');
        
        if (metaDescription) {
            metaDescription.setAttribute('content', translations[lang].meta_description);
        }
        if (metaKeywords) {
            metaKeywords.setAttribute('content', translations[lang].meta_keywords);
        }
    }


        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update active button
        if (lang === 'bg') {
            langBgBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langBgBtn.classList.remove('active');
        }
    };

    langBgBtn.addEventListener('click', () => setLanguage('bg'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));

    // Set initial language
    setLanguage('bg'); 
});