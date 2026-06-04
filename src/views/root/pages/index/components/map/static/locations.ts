import { PageNamesT } from '@services/router/static/pages';
import { PopupsT } from '@store/popups';

export const mapLocations: Record<
    string,
    {
        thumb: string;
        title: string;
        pageName?: PageNamesT;
        pageIds?: Record<string, string>;
        popupName?: keyof PopupsT;
        goal?: string;
        alert?: string;
        link?: string;
    }
> = {
    '1': {
        thumb: 'map-loc-01.png',
        title: 'Регистрация<br/>кода',
        popupName: 'codePopup',
    },
    '2': {
        thumb: 'map-loc-02.png',
        title: 'Как<br/>участвовать',
        pageName: 'rules',
        goal: 'howToBtn',
    },
    '3': {
        thumb: 'map-loc-03.png',
        title: 'Личный<br/>кабинет',
        pageName: 'profile',
        goal: 'profileBtn,mapProfileBtn',
    },
    '4': {
        thumb: 'map-loc-04.png',
        title: 'Продукты-<br/>участники',
        pageName: 'products',
        goal: 'aboutBtn',
    },
    '5': {
        thumb: 'map-loc-05.png',
        title: 'Призы',
        pageName: 'prizes',
        goal: 'prizesBtn',
    },
    '6': {
        thumb: 'map-loc-06.png',
        title: 'ТАпай<br/>к фестивалю',
        pageName: 'gameInner',
        pageIds: { 1: 'TAP' },
        goal: 'mapGameFest',
    },
    '7': {
        thumb: 'map-loc-07.png',
        title: 'Диджей,<br/>зажигай',
        pageName: 'gameInner',
        pageIds: { 1: 'DJ' },
        goal: 'mapGameDjlightup',
    },
    '8': {
        thumb: 'map-loc-08.png',
        title: 'Лови вайб',
        pageName: 'gameInner',
        pageIds: { 1: 'VIBE' },
        goal: 'mapGameVibe',
    },
    '9': {
        thumb: 'map-loc-09.png',
        title: 'Пятёрочка',
        pageName: '5ka',
        goal: 'mapPopup5ka',
    },
    '10': {
        thumb: 'map-loc-10.png',
        title: 'Магнит',
        popupName: 'magnitPopup',
        goal: 'mapPopupMagnit',
    },
    '11': {
        thumb: 'map-loc-11.png',
        title: 'Лента',
        popupName: 'lentaPopup',
        goal: 'mapPopupLenta',
    },
    '12': {
        thumb: 'map-loc-12.png',
        title: 'Перекрёсток',
        popupName: 'perekrestokPopup',
        goal: 'mapPopupPerek',
    },
    '13': {
        thumb: 'map-loc-13.png',
        title: 'Дикси',
        popupName: 'diksiPopup',
        goal: 'mapPopupDixy',
    },
    '14': {
        thumb: 'map-loc-14.png',
        title: 'Красное <br/>и БЕлое',
        popupName: 'kbPopup',
        goal: 'mapPopupKB',
    },
    '15': {
        thumb: 'map-loc-15.png',
        title: 'Лукойл',
        popupName: 'lukoilPopup',
        goal: 'mapPopupLukoil',
    },
    '16': {
        thumb: 'map-loc-16.png',
        title: 'Яндекс. еда',
        alert: 'Cтарт акции с 4.06',
    },
    '17': {
        thumb: 'map-loc-17.png',
        title: 'Яндекс. лавка',
        link: 'https://lavka.yandex.ru/catalog/promo/category/dobriy',
        goal: 'mapPopupYandexlavka',
    },
    '18': {
        thumb: 'map-loc-18.png',
        title: 'Самокат',
        alert: 'Cтарт акции с 17.06',
    },
    '19': {
        thumb: 'map-loc-19.png',
        title: 'Разгуляйка',
        link: 'https://русский-разгуляйка.рф/giveaway/31',
        goal: 'mapPopupRazgul',
    },
};

export const mapSections = {
    start: {
        thumb: 'banner-map-1.png',
        title: 'основные локации',
        mapTitle: 'основные локации',
    },
    game: {
        thumb: 'banner-map-1.png',
        title: 'Игровая зона',
        mapTitle: 'Игровая зона',
    },
    partners: {
        thumb: 'banner-map-2.png',
        title: 'Акции партнеров',
        mapTitle: 'Акции партнеров',
    },
};
