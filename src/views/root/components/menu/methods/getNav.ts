import I, { MenuNavItemT } from '../types.ts';

const getNav: I['getNav'] = function () {
    const nav: MenuNavItemT[] = [];

    nav.push({ text: 'ГЛАВНАЯ', name: 'index', type: 'link', pageName: 'index' });
    nav.push({ text: 'Правила Акции', name: 'rules', type: 'link', pageName: 'rules' });
    nav.push({ text: 'Призы', name: 'prizes', type: 'link', pageName: 'prizes' });
    nav.push({ text: 'Победители', name: 'winners', type: 'link', pageName: 'winners' });
    nav.push({ text: 'Вопрос-ответ', name: 'faq', type: 'link', pageName: 'faq' });
    nav.push({ text: 'Продукты-участники', name: 'products', type: 'link', pageName: 'products' });
    nav.push({ text: 'Акции партнеров', name: 'partners', type: 'ancor', pageName: 'index' });
    nav.push({ text: 'Чат-бот', name: 'chatbot', type: 'href' });

    return nav;
};

export default getNav;
