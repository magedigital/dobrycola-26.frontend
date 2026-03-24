import DefaultI from '@components/default/types';

type PropsT = {
    text: string;
    disabled?: boolean;
};

type StateT = {};

interface InnerHtmlI extends DefaultI<PropsT, StateT> {}

export default InnerHtmlI;
