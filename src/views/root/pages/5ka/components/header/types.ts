import DefaultI from '@components/default/types';

type PropsT = {};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {
    renderHead(this: HeaderI): React.ReactNode;
    renderArm(this: HeaderI): React.ReactNode;
    renderContent(this: HeaderI): React.ReactNode;
}

export default HeaderI;
