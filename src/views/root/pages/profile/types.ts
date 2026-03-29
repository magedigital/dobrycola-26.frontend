import PageI from '@components/page/types';
import { StoreT } from '@store/store';

type PropsT = {
    authUser: StoreT['authUser'];
};

type StateT = {
    loadingKey?: string;
    pagesRenderKey?: string;
    isCopy?: boolean;
    data?: ProfileDataT;
    content?: ProfileContentT;
    isReady?: boolean;
};

type ProfileCheckT = {
    id: string;
    date: string;
    fd: string;
    points: number;
    status: string;
    statusCode: 'ACCEPTED' | 'CHECKING';
    store: string;
    result: string;
};

type ProfileCodeT = {
    code: string;
    registered: string;
};

type ProfilePrizeT = {
    id: string;
    title: string;
    url: string;
    thumb: string;
    code: string;
    status: 'DOWNLOAD' | 'SENDING' | 'SENT' | 'DATA_NEEDED' | 'NEED_CODE';
    statusTitle: string;
    extraTitle: null | string;
    count: number;
    promoCode?: string;
    expired?: string;
    detailPicture?: string;
    detailText?: string;
};

type ProfileDataT = {
    widgetJWT: string;
    personal: {
        id: string;
        firstName: string;
        lastName: string;
    };
    game: {
        attempts: number;
    };
    hasTransactions: boolean;
    transactions: ProfileTransactionT[];
    balance: number;
    balanceTitle: string;
    checks: ProfileCheckT[];
    codes: ProfileCodeT[];
    prizes: ProfilePrizeT[];
    canInputPromocode: boolean;
};

type ProfileContentT = {
    components: {
        extra5ka: {
            alpha: {
                title: string;
                thumb: string;
            };
        };
        buy: {
            raffle: {
                info: {
                    header: {
                        title: string;
                        description: string;
                    };
                    button: {
                        title: string;
                    };
                };
                prizes: {
                    title: string;
                    thumb: string;
                }[];
            };
            merch: {
                festNaming: {
                    title: string;
                    description: string;
                }[];
                info: {
                    header: {
                        title: string;
                        description: string;
                    };
                    button: {
                        title: string;
                    };
                    popupHeader: {
                        title: string;
                        description: string;
                    };
                    success: {
                        title: string;
                        description: string;
                    };
                };
                prizes: ProfileMerchT[];
            };
        };
    };
};

type ProfileChzCodeT = {
    id: string;
};

type ProfileMerchT = {
    title: string;
    thumb: string;
    code: string;
    price: string;
    subtitle: string;
    description: string;
    custom?: '1';
};

type ProfileTransactionT = {
    sum: string;
    comment: string;
    datetime: string;
};

interface ProfileI extends PageI<PropsT, StateT> {
    setPagesRenderKey(this: ProfileI): Promise<void>;
    copyHandler(this: ProfileI): Promise<void>;

    requestLogout(this: ProfileI): Promise<void>;
    getContent(this: ProfileI): Promise<void>;

    renderContent(this: ProfileI): React.ReactNode;
    renderHead(this: ProfileI): React.ReactNode;
    renderMain(this: ProfileI): React.ReactNode;
    renderPages(this: ProfileI): React.ReactNode;
}

export default ProfileI;
export type {
    ProfileDataT,
    ProfileCheckT,
    ProfileCodeT,
    ProfilePrizeT,
    ProfileContentT,
    ProfileMerchT,
    ProfileChzCodeT,
    ProfileTransactionT,
};
