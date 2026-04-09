import { FooterContentT } from '@api/requests/content';
import DefaultI from '@components/default/types';
import { StoreT } from '@store/store';

type PropsT = {
    mainContent: StoreT['mainContent'];
    mode?: '5ka';
    content?: FooterContentT;
};

type StateT = {};

interface FooterI extends DefaultI<PropsT, StateT> {}

export default FooterI;
