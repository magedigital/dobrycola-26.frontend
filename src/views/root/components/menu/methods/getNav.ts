import I, { MenuNavItemT } from '../types.ts';

const getNav: I['getNav'] = function () {
    const nav: MenuNavItemT[] = [];

    nav.push({
        text: 'ГЛАВНАЯ',
        name: 'index',
        type: 'link',
        pageName: 'index',
        goal: 'menuMain',
    });
    nav.push({
        text: 'Правила Акции',
        name: 'rules',
        type: 'link',
        pageName: 'rules',
        goal: 'menuRules',
    });
    nav.push({
        text: 'Призы',
        name: 'prizes',
        type: 'link',
        pageName: 'prizes',
        goal: 'menuPrizes',
    });
    nav.push({
        text: 'Победители',
        name: 'winners',
        type: 'link',
        pageName: 'winners',
        goal: 'menuWinners',
    });
    nav.push({
        text: 'Вопрос-ответ',
        name: 'faq',
        type: 'link',
        pageName: 'faq',
        goal: 'menuFaq',
    });
    nav.push({
        text: 'Продукты-участники',
        name: 'products',
        type: 'link',
        pageName: 'products',
        goal: 'menuAbout',
    });
    nav.push({
        text: 'Акции партнеров',
        name: 'partners',
        type: 'ancor',
        pageName: 'index',
        ancor: 'partners',
        goal: 'menuPartners',
    });
    nav.push({
        text: 'Чат-бот',
        name: 'chatbot',
        type: 'href',
        href: 'https://t.me/dobrycola_promo_bot',
        goal: 'menuChatbot',
    });

    return nav;
};

export default getNav;
