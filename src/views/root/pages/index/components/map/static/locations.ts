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
        alert: 'Старт акции с 07.05',
        popupName: 'lentaPopup',
    },
    '12': {
        thumb: 'map-loc-12.png',
        title: 'Перекрёсток',
        alert: 'Старт акции с 04.05',
        popupName: 'perekrestokPopup',
    },
    '13': {
        thumb: 'map-loc-13.png',
        title: 'Дикси',
        alert: 'Старт акции с 04.05',
        popupName: 'diksiPopup',
    },
    '14': {
        thumb: 'map-loc-14.png',
        title: 'Красное <br/>и БЕлое',
        alert: 'Старт акции с 01.05',
        popupName: 'kbPopup',
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
