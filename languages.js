// Language translations
const translations = {
    en: {
        // Navigation
        home: 'Home',
        tutorials: 'Tutorials',
        projects: 'Projects',
        pinouts: 'Pinouts',
        resources: 'Resources',
        community: 'Community',
        
        // Hero Section
        heroTitle: 'Welcome to Arduino Learning Hub',
        heroSubtitle: 'Master Arduino Programming with Interactive Tutorials and Real-World Projects',
        startLearning: 'Start Learning',
        
        // Tutorials Section
        beginnerTutorials: 'Beginner Tutorials',
        gettingStarted: 'Getting Started',
        gettingStartedDesc: 'Learn how to set up your Arduino board and IDE. Perfect for beginners.',
        learnMore: 'Learn More',
        basicLED: 'Basic LED Control',
        basicLEDDesc: 'Control an LED using digitalWrite and digital pins.',
        analogInput: 'Reading Analog Input',
        analogInputDesc: 'Learn how to read analog sensors and values.',
        serialComm: 'Serial Communication',
        serialCommDesc: 'Master serial communication for debugging and data transfer.',
        pwmControl: 'PWM Control',
        pwmControlDesc: 'Control brightness and speed with PWM signals.',
        libraries: 'Libraries & Functions',
        librariesDesc: 'Explore Arduino libraries and how to use them effectively.',
        buttonInput: 'Button Input & Debouncing',
        buttonInputDesc: 'Learn to read button inputs and handle debouncing.',
        timeMillis: 'Time & Millis() Function',
        timeMillisDesc: 'Master timing in Arduino without using delay().',
        sound: 'Sound & Buzzer Control',
        soundDesc: 'Generate tones and control buzzers with tone() function.',
        dataTypes: 'Data Types & Variables',
        dataTypesDesc: 'Understand Arduino data types and memory management.',
        loops: 'Loops & Conditionals',
        loopsDesc: 'Master control flow with loops and if statements.',
        
        // Projects Section
        popularProjects: 'Popular Projects',
        trafficLight: 'Traffic Light System',
        trafficLightDesc: 'Build a working traffic light using LEDs and Arduino.',
        tempMonitor: 'Temperature Monitor',
        tempMonitorDesc: 'Read temperature and display on LCD screen.',
        motionDetector: 'Motion Detector Alarm',
        motionDetectorDesc: 'Create a motion detection system with buzzer alert.',
        plantWatering: 'Plant Watering System',
        plantWateringDesc: 'Automatic plant watering based on soil moisture.',
        viewProject: 'View Project',
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        
        // Pinouts Section
        pinoutsTitle: 'Arduino Pinout Reference',
        pinoutsSubtitle: 'Complete pinout diagrams and specifications for different Arduino boards',
        unoBoard: 'Arduino Uno',
        nanoBoard: 'Arduino Nano',
        megaBoard: 'Arduino Mega',
        proBoard: 'Arduino Pro Mini',
        
        // Resources Section
        resourcesTitle: 'Resources & References',
        documentation: 'Official Documentation',
        documentationDesc: 'Complete reference for Arduino functions and syntax.',
        componentGuide: 'Component Guide',
        componentGuideDesc: 'Learn about resistors, capacitors, sensors, and more.',
        viewGuide: 'View Guide',
        commonMistakes: 'Common Mistakes',
        commonMistakesDesc: 'Learn what beginners often get wrong.',
        viewIssues: 'View Common Issues',
        
        // Community Section
        joinCommunity: 'Join Our Community',
        communityText: 'Connect with other Arduino enthusiasts and share your projects!',
        subscribe: 'Subscribe to Newsletter',
        sendFeedback: 'Send Feedback',
        shareProject: 'Share Your Project',
        
        // Footer
        copyright: '© 2025 Arduino Learning Hub. All rights reserved.',
        madeWith: 'Made with ❤️ for Arduino enthusiasts',
        github: 'GitHub',
    },
    hy: {
        // Navigation
        home: 'Տուն',
        tutorials: 'Դասընթացներ',
        projects: 'Նախագծեր',
        pinouts: '핀ներ',
        resources: 'Ռեսուրսներ',
        community: 'Համայնք',
        
        // Hero Section
        heroTitle: 'Բարի գալուստ Arduino Learning Hub',
        heroSubtitle: 'Տիրապետեք Arduino ծրագրավորմանը ինտերակտիվ դասընթացների և իրական նախագծերի միջոցով',
        startLearning: 'Սկսել Սովորել',
        
        // Tutorials Section
        beginnerTutorials: 'Սկսնակ Դասընթացներ',
        gettingStarted: 'Նախնական Ծանուցում',
        gettingStartedDesc: 'Իմացեք, թե ինչպես կարգավորել ձեր Arduino տախտակը և IDE: Կատարյալ սկսնակների համար:',
        learnMore: 'Ավելին Իմացեք',
        basicLED: 'Հիմնական LED Կառավարում',
        basicLEDDesc: 'Կառավարեք LED-ը՝ օգտագործելով digitalWrite և թվային핀:',
        analogInput: 'Անալոգային Մուտքի Ընթերցում',
        analogInputDesc: 'Իմացեք, թե ինչպես կարդալ անալոգային սենսորներ և արժեքներ:',
        serialComm: 'Սերիական Հաղորդակցություն',
        serialCommDesc: 'Տիրապետեք սերիական հաղորդակցությանը վրիպազ հանման և տվյալների փոխանցման համար:',
        pwmControl: 'PWM Կառավարում',
        pwmControlDesc: 'Կառավարեք պայծառությունը և արագությունը PWM ազդանշանների միջոցով:',
        libraries: 'Գրադարանները & Ֆունկցիաները',
        librariesDesc: 'Ուսումնասիրեք Arduino գրադարանները և ինչպես դրանք արդյունավետորեն օգտագործել:',
        buttonInput: 'Կոճակի Մուտք & Debouncing',
        buttonInputDesc: 'Իմացեք, թե ինչպես կարդալ կոճակի մուտքերը և կարգավորել debouncing-ը:',
        timeMillis: 'Ժամանակ & Millis() Ֆունկցիա',
        timeMillisDesc: 'Տիրապետեք Arduino-ում ժամանակներին առանց delay() օգտագործման:',
        sound: 'Ձայն & Զამբյուղ Կառավարում',
        soundDesc: 'Գեներացնեք տոներ և կառավարեք բզամբ tone() ֆունկցիայով:',
        dataTypes: 'Տվյալների Տեսակներ & Փոփոխականներ',
        dataTypesDesc: 'Հասկացեք Arduino տվյալների տեսակներ և հիշողության կառավարում:',
        loops: 'Հանգույցներ & Պայմանական',
        loopsDesc: 'Տիրապետեք հավաքվածքի հոսքին հանգույցներ և if հայտարարություններով:',
        
        // Projects Section
        popularProjects: 'Հայտնի Նախագծեր',
        trafficLight: 'Ճանապարհային Լույսի Համակարգ',
        trafficLightDesc: 'Կառուցեք աշխատող ճանապարհային լույս՝ օգտագործելով LED և Arduino:',
        tempMonitor: 'Ջերմաստիճանի Մոնիտոր',
        tempMonitorDesc: 'Կարդացեք ջերմաստիճանը և ցուցադրեք LCD էկրանին:',
        motionDetector: 'Շարժման Հայտնի Ալերտ',
        motionDetectorDesc: 'Ստեղծեք շարժման հայտնի համակարգ բզամբ Alert-ով:',
        plantWatering: 'Բույսերի Ջրելու Համակարգ',
        plantWateringDesc: 'Ավտոմատ բույսերի ջրում՝ հիմնված հողի խոնավության վրա:',
        viewProject: 'Դիտել Նախագիծ',
        beginner: 'Սկսնակ',
        intermediate: 'Միջանկյալ',
        advanced: 'Ընդլայնված',
        
        // Pinouts Section
        pinoutsTitle: 'Arduino Pinout Հղում',
        pinoutsSubtitle: 'Ամբողջական pinout դիագրամներ և բնութագրեր տարբեր Arduino տախտակների համար',
        unoBoard: 'Arduino Uno',
        nanoBoard: 'Arduino Nano',
        megaBoard: 'Arduino Mega',
        proBoard: 'Arduino Pro Mini',
        
        // Resources Section
        resourcesTitle: 'Ռեսուրսներ & Հղումներ',
        documentation: 'Պաշտոնական Փաստաթուղթ',
        documentationDesc: 'Arduino ֆունկցիաների և շարահյուսության ամբողջական հղում:',
        componentGuide: 'Բաղադրիչի Ուղեցույց',
        componentGuideDesc: 'Իմացեք դիմադրիչների, կոնդենսատորների, սենսորների և շատ ավելի լավ:',
        viewGuide: 'Դիտել Ուղեցույց',
        commonMistakes: 'Սովորական Սխալներ',
        commonMistakesDesc: 'Իմացեք, թե ինչ սխալներ են կատարում սկսնակները:',
        viewIssues: 'Դիտել Ընդհանուր Խնդիրներ',
        
        // Community Section
        joinCommunity: 'Միացեք Մեր Համայնքին',
        communityText: 'Կապվեք այլ Arduino enthusiasts-երի հետ և կիսվեք ձեր նախագծերով:',
        subscribe: 'Բաժանորդագրվել Տեղեկագրի',
        sendFeedback: 'Ուղարկել Հետադարձ Կապ',
        shareProject: 'Կիսվել Ձեր Նախագծով',
        
        // Footer
        copyright: '© 2025 Arduino Learning Hub: Բոլոր իրավունքները պահված են:',
        madeWith: 'Պատրաստված ❤️ Arduino enthusiasts-ների համար',
        github: 'GitHub',
    },
    ru: {
        // Navigation
        home: 'Главная',
        tutorials: 'Уроки',
        projects: 'Проекты',
        pinouts: 'Распиновки',
        resources: 'Ресурсы',
        community: 'Сообщество',
        
        // Hero Section
        heroTitle: 'Добро пожаловать в Arduino Learning Hub',
        heroSubtitle: 'Овладейте программированием Arduino с помощью интерактивных уроков и реальных проектов',
        startLearning: 'Начать обучение',
        
        // Tutorials Section
        beginnerTutorials: 'Уроки для начинающих',
        gettingStarted: 'Начало работы',
        gettingStartedDesc: 'Узнайте, как настроить плату Arduino и IDE. Идеально для начинающих.',
        learnMore: 'Узнать больше',
        basicLED: 'Базовое управление светодиодом',
        basicLEDDesc: 'Управляйте светодиодом с помощью digitalWrite и цифровых контактов.',
        analogInput: 'Чтение аналогового входа',
        analogInputDesc: 'Узнайте, как читать аналоговые датчики и значения.',
        serialComm: 'Последовательная связь',
        serialCommDesc: 'Освойте последовательную коммуникацию для отладки и передачи данных.',
        pwmControl: 'Управление ШИМ',
        pwmControlDesc: 'Управляйте яркостью и скоростью с помощью ШИМ сигналов.',
        libraries: 'Библиотеки и функции',
        librariesDesc: 'Изучите библиотеки Arduino и как их эффективно использовать.',
        buttonInput: 'Ввод кнопки и защита от дребезга',
        buttonInputDesc: 'Узнайте, как читать входы кнопок и обрабатывать дребезг.',
        timeMillis: 'Время и функция Millis()',
        timeMillisDesc: 'Овладейте синхронизацией в Arduino без использования delay().',
        sound: 'Звук и управление зуммером',
        soundDesc: 'Генерируйте тоны и управляйте зуммерами с помощью функции tone().',
        dataTypes: 'Типы данных и переменные',
        dataTypesDesc: 'Поймите типы данных Arduino и управление памятью.',
        loops: 'Циклы и условные операторы',
        loopsDesc: 'Овладейте потоком управления циклами и операторами if.',
        
        // Projects Section
        popularProjects: 'Популярные проекты',
        trafficLight: 'Система светофора',
        trafficLightDesc: 'Постройте работающий светофор, используя светодиоды и Arduino.',
        tempMonitor: 'Монитор температуры',
        tempMonitorDesc: 'Прочитайте температуру и выведите на ЖК-дисплей.',
        motionDetector: 'Сигнализация детектора движения',
        motionDetectorDesc: 'Создайте систему обнаружения движения с оповещением зуммера.',
        plantWatering: 'Система полива растений',
        plantWateringDesc: 'Автоматический полив растений на основе влажности почвы.',
        viewProject: 'Просмотреть проект',
        beginner: 'Начинающий',
        intermediate: 'Средний',
        advanced: 'Продвинутый',
        
        // Pinouts Section
        pinoutsTitle: 'Справочник распиновок Arduino',
        pinoutsSubtitle: 'Полные диаграммы распиновок и спецификации для различных плат Arduino',
        unoBoard: 'Arduino Uno',
        nanoBoard: 'Arduino Nano',
        megaBoard: 'Arduino Mega',
        proBoard: 'Arduino Pro Mini',
        
        // Resources Section
        resourcesTitle: 'Ресурсы и ссылки',
        documentation: 'Официальная документация',
        documentationDesc: 'Полная справка по функциям и синтаксису Arduino.',
        componentGuide: 'Руководство компонентов',
        componentGuideDesc: 'Узнайте о резисторах, конденсаторах, датчиках и многом другом.',
        viewGuide: 'Просмотреть руководство',
        commonMistakes: 'Распространённые ошибки',
        commonMistakesDesc: 'Узнайте, какие ошибки часто допускают начинающие.',
        viewIssues: 'Просмотреть распространённые проблемы',
        
        // Community Section
        joinCommunity: 'Присоединитесь к нашему сообществу',
        communityText: 'Общайтесь с другими энтузиастами Arduino и делитесь своими проектами!',
        subscribe: 'Подписаться на рассылку',
        sendFeedback: 'Отправить отзыв',
        shareProject: 'Поделиться проектом',
        
        // Footer
        copyright: '© 2025 Arduino Learning Hub. Все права защищены.',
        madeWith: 'Создано с ❤️ для энтузиастов Arduino',
        github: 'GitHub',
    }
};

// Current language
let currentLanguage = 'en';

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
}

// Update page language
function updatePageLanguage() {
    const t = translations[currentLanguage];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
}

// Get translated text
function t(key) {
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    return key;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    currentLanguage = savedLanguage;
    document.getElementById('languageSelect').value = savedLanguage;
    updatePageLanguage();
});
