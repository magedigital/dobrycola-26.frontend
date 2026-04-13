import { games } from '@static/games.ts';

import I from '../types.ts';

const getMetaTitle: I['getMetaTitle'] = function () {
    const { pages, currentPopup } = this.props;
    let title = 'Добрый - Так звучит твоё лето';

    if (currentPopup) {
        if (currentPopup === 'codePopup') {
            title = 'Регистрация кода';
        } else if (currentPopup === 'loginPopup') {
            title = 'Авторизация';
        } else if (currentPopup === 'regPopup') {
            title = 'Получение пароля';
        } else if (currentPopup === 'chequePopup') {
            title = 'Регистрация чека';
        }
    } else if (pages['5ka'].isShow) {
        title = 'Добрый - 5ка';
    } else if (pages.profile.isShow) {
        title = 'Личный кабинет';
    } else if (pages['prizes-moment'].isShow) {
        title = 'Призы - Моментальный розыгрыш';
    } else if (pages['prizes-balls'].isShow) {
        title = 'Призы - Копи баллы';
    } else if (pages['prizes-week'].isShow) {
        title = 'Призы - Еженедельно';
    } else if (pages['prizes-spec'].isShow) {
        title = 'Призы - Главный приз';
    } else if (pages.products.isShow) {
        title = 'Продукты-участники';
    } else if (pages.gameInner.isShow) {
        const game = games[pages.gameInner.id as keyof typeof games];

        title = game?.meta;
    }

    return title;
};

export default getMetaTitle;
