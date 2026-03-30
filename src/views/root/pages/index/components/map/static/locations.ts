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
    },
    '3': {
        thumb: 'map-loc-03.png',
        title: 'Личный<br/>кабинет',
        pageName: 'profile',
    },
    '4': {
        thumb: 'map-loc-04.png',
        title: 'Продукты-<br/>участники',
        pageName: 'products',
    },
    '5': {
        thumb: 'map-loc-05.png',
        title: 'Призы',
        pageName: 'prizes',
    },
    '6': {
        thumb: 'map-loc-06.png',
        title: 'ТАпай<br/>к фестивалю',
        pageName: 'gameInner',
        pageIds: { 1: 'TAP' },
    },
    '7': {
        thumb: 'map-loc-07.png',
        title: 'Диджей,<br/>зажигай',
        pageName: 'gameInner',
        pageIds: { 1: 'DJ' },
    },
    '8': {
        thumb: 'map-loc-08.png',
        title: 'Лови вайб',
        pageName: 'gameInner',
        pageIds: { 1: 'VIBE' },
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
        mapTitle: 'Акции партнеров скоро!',
    },
};
