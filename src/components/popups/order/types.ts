import PopupI from '@components/popup/types';
import Slider from '@services/slider/Slider';
import { StoreT } from '@store/store';

import { ProfileContentT, ProfileOrderT } from '../../../views/root/pages/profile/types';

type PropsT = {
    orderPopup: StoreT['orderPopup'];
};

type StateT = {
    content?: ProfileContentT;
    currentOrderIndex?: number;
    currentCustomValue?: string;
    merchInfoActive?: boolean;
    error?: string;
    isConfirm?: boolean;
    items?: ThisOrderT[];
};

type ThisOrderT = ProfileOrderT & { id: string; isCurrent: boolean };

interface OrderI extends PopupI<PropsT, StateT> {
    slider?: Slider;

    send(this: OrderI): Promise<void>;

    sliderInit(this: OrderI): void;
    merchInfoHandler(this: OrderI, merchInfoActive: boolean): Promise<void>;

    renderContent(this: OrderI): React.ReactNode;
    renderSlider(this: OrderI): React.ReactNode;
    renderHead(this: OrderI): React.ReactNode;
}

export default OrderI;
export type { ThisOrderT };
