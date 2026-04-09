import { FooterContentT } from '@api/requests/content';
import PageI from '@components/page/types';

import { ProductT } from '../products/types';

type PropsT = {};

type StateT = {
    content?: FivekaContentT;
};

type FivekaContentT = {
    components: {
        prizes: {
            weekly: {
                info: {
                    title: {
                        title: string;
                    };
                };
                items: {
                    title: string;
                    thumb: string;
                }[];
            };
            vip: {
                info: {
                    title: {
                        title: string;
                    };
                };
                items: {
                    title: string;
                    thumb: string;
                }[];
            };
        };
        products: ProductT[];
        footer: FooterContentT;
    };
};

interface FiveKaI extends PageI<PropsT, StateT> {}

export default FiveKaI;
export type { FivekaContentT };
