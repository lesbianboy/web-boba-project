/*change language*/ 
function changeLang(lang) {
        lengthObj = Object.getOwnPropertyNames(lang).length;
            for (var i = 0; i <= lengthObj - 1; i++) {
                objKey = Object.getOwnPropertyNames(lang)[i];
                console.log(objKey);
                document.getElementById(objKey).innerText = func(objKey);
            }

function func(_objKey) {
    for (key in lang) {
        if (key == _objKey) {
            return (lang[key]);
        }
    }
    }
}

var En = {
    'Menu' : 'Menu',
    'Menu2' : 'Menu',
    'Menu3' : 'Menu',
    'About' : 'About Us',
    'Contacts' : 'Contacts',
    'Contacts2' : 'Adress',
    'Contacts3' : 'Contacts',
    'body_title' : 'Drinks that can brighten up any of your days',
    'now' : 'Now',
    'closed' : 'closed',
    'open' : 'open',
    'open_hours' : 'Open every day 11 am - 10 pm',
    'button_NP' : 'New Products',
    'button_MT' : 'Milk Tea',
    'button_BD' : 'Branded Drinks',
    'button_S' : 'Smoothies',
    'button_IT' : 'Ice Tea',
    'button_C' : 'Coffee',
    'size_l1' : 'Large',
    'size_m1' : 'Medium',
    'size_b1' : 'Bubbles',
    'size_l2' : 'Large',
    'size_m2' : 'Medium',
    'size_b2' : 'Bubbles',
    'size_l3' : 'Large',
    'size_m3' : 'Medium',
    'size_b3' : 'Bubbles',
    'size_l4' : 'Large',
    'size_m4' : 'Medium',
    'size_b4' : 'Bubbles',
    'order' : 'Order through',
    'event' : '10th Boba tea for free',
    'event_des' : 'Come to Boba tea, collect nine marks on the coupon and get the tenth drink as a gift.',
    'AboutUs' : 'About us',
    'about_us_text' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'adress' : 'Türkistan, 16/5 Esil district, Nur-Sultan',
    'inst' : 'Follow us',
    'bonuses' : 'Bonuses',
    'op_hours' : 'Opening hours',
    'open_days' : 'Every day',
    'products': 'Products',
    'map' : 'Map'
};
var Ru = {
    'Menu' : 'Меню',
    'Menu2' : 'Меню',
    'Menu3' : 'Меню',
    'About' : 'О нас',
    'Contacts' : 'Контакты',
    'Contacts2' : 'Адрес',
    'Contacts3' : 'Контакты',
    'body_title' : 'Напитки которые скрасят любой из ваших дней',
    'now' : 'Сечайс',
    'closed' : 'закрыто',
    'open' : 'открыто',
    'open_hours' : 'Открыт каждый день с 11 утра до 10 вечера',
    'button_NP' : 'Новинки',
    'button_MT' : 'Чай с молоком',
    'button_BD' : 'Фирменные напитки',
    'button_S' : 'Смузи',
    'button_IT' : 'Холодный чай',
    'button_C' : 'Кофе',
    'size_l1' : 'Большой',
    'size_m1' : 'Средний',
    'size_b1' : 'Пузырьки',
    'size_l2' : 'Большой',
    'size_m2' : 'Средний',
    'size_b2' : 'Пузырьки',
    'size_l3' : 'Большой',
    'size_m3' : 'Средний',
    'size_b3' : 'Пузырьки',
    'size_l4' : 'Большой',
    'size_m4' : 'Средний',
    'size_b4' : 'Пузырьки',
    'order' : 'Заказать через',
    'event' : '10-й чай Boba бесплатно',
    'event_des' : 'Приходите в Boba tea, соберите девять отметок на купоне и получите десятый напиток в подарок.',
    'AboutUs' : 'О нас',
    'about_us_text' : 'какой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то текст какой то текст текст какой то текст текст какой то текст текст какой то текст текст какой то текст текст какой то текст текст какой то текст текст какой то текст',
    'adress' : 'Түркістан, 16/5 Есиль район, Нур-Султан',
    'inst' : 'Подписывайтесь',
    'bonuses' : 'Бонусы',
    'op_hours' : 'Открытие',
    'open_days' : 'Каждый день',
    'products': 'Продукты',
    'map' : 'Карта'
};
