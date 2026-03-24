import PageI from '@components/page/types';

type PropsT = {};

type StateT = {
    content?: ProductsContentT;
};

type ProductsContentT = {
    components: {
        products: ProductT[];
    };
};

type ProductT = {
    description: {
        header: {
            title: string;
            description: string;
        };
    };
    sku: {
        new?: '1';
        promo?: 'all' | '5ka' | 'ncp';
        title: string;
        thumb: string;
    }[];
};

interface ProductsI extends PageI<PropsT, StateT> {
    getContent(this: ProductsI): Promise<void>;
}

export default ProductsI;
export type { ProductsContentT, ProductT };
