import { StoreT, appStore } from '../../../store/store';

const pages = {
    index: {
        links: ['', undefined],
        isPublic: true,
    },
    profile: {
        links: ['profile'],
        check: (s: StoreT) => {
            if (
                !s.authUser ||
                s.authUser.status === 'EMAIL_CONFIRM_REQUIRED' ||
                s.authUser.status === 'EXTRA_ANKET_REQUIRED'
            ) {
                let pageName = s.showPages.find((p) => (pages[p] as PageT).isPublic);

                if (s.authUser?.status === 'EMAIL_CONFIRM_REQUIRED') {
                    pageName = 'anket';
                }

                if (s.authUser?.status === 'EXTRA_ANKET_REQUIRED') {
                    pageName = 'fullAnket';
                }

                return {
                    pageName: pageName || 'index',
                    callback: !s.authUser
                        ? () => {
                              appStore.getState().setPopup({ name: 'loginPopup' });
                          }
                        : undefined,
                };
            }
        },
    },
    'profile-codes': {
        links: ['', undefined, 'codes'],
        level: 1,
        parentName: 'profile',
    },
    'profile-cheques': {
        links: ['cheques'],
        level: 1,
        parentName: 'profile',
    },
    'profile-prizes': {
        links: ['prizes'],
        level: 1,
        parentName: 'profile',
    },
    faq: {
        links: ['faq'],
        isPublic: true,
    },
    anket: {
        links: ['anket'],
    },
    fullAnket: {
        links: ['full-anket'],
    },
    winners: {
        links: ['winners'],
    },
    products: {
        links: ['products'],
    },
    rules: {
        links: ['rules'],
    },
    login: {
        links: ['login'],
    },
    game: {
        links: ['game'],
    },
    gameInner: {
        links: [],
        level: 1,
        parentName: 'game',
        withId: true,
    },
    raffle: {
        links: ['raffle'],
    },
    prizes: {
        links: ['prizes'],
    },
    'prizes-moment': {
        links: ['', undefined, 'moment'],
        level: 1,
        parentName: 'prizes',
    },
    'prizes-balls': {
        links: ['balls'],
        level: 1,
        parentName: 'prizes',
    },
    'prizes-week': {
        links: ['week'],
        level: 1,
        parentName: 'prizes',
    },
    'prizes-month': {
        links: ['month'],
        level: 1,
        parentName: 'prizes',
    },
    'prizes-spec': {
        links: ['spec'],
        level: 1,
        parentName: 'prizes',
    },
    botReg: {
        links: ['botReg'],
        forBot: true,
    },
    botAnket: {
        links: ['botAnket'],
        forBot: true,
    },
    '5ka': {
        links: ['5ka'],
    },
} as const;

type PageT = {
    links: readonly (string | undefined)[];
} & Partial<{
    level: number;
    parentName: PageNamesT;
    isPopup: boolean;
    content: string;
    group: string;
    className: string;
    isPublic: boolean;
    mainPage: string | ((data: StoreT) => string);
    check: (s: StoreT) => { pageName: PageNamesT; callback?: () => void } | undefined;
    withId: boolean;
    forBot: boolean;
}>;

type PageNamesT = keyof typeof pages;

export default pages;

export type { PageT, PageNamesT };
