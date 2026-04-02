import I from '../types.ts';

const getMetaTitle: I['getMetaTitle'] = function () {
    const { pages, currentPopup } = this.props;
    let title: string | undefined;

    if (currentPopup) {
        if (currentPopup === 'codePopup') {
            title = 'Регистрация кода';
        } else if (currentPopup === 'loginPopup') {
            title = 'Авторизация';
        } else if (currentPopup === 'regPopup') {
            title = 'Получение пароля';
        }
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
    }

    return title;
};

export default getMetaTitle;
