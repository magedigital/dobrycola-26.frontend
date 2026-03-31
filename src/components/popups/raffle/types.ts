import PopupI from '@components/popup/types';
import Slider from '@services/slider/Slider';
import { StoreT } from '@store/store';

type PropsT = {
    rafflePopup: StoreT['rafflePopup'];
};

type StateT = {
    loadingKey?: string;
    error?: string;
    inProcess?: boolean;
    isComplete?: boolean;
    isError?: boolean;
    prizes?: PrizeItemT[];
    resultPrize?: {
        name: string;
        image: string;
    };
    isConfirm?: boolean;
};

type PrizeItemT = {
    title: string;
    thumb: string;
};

type ResultPrizeT = {
    name: string;
    image: string;
};

interface RaffleI extends PopupI<PropsT, StateT> {
    slider?: Slider;
    allCounter: number;
    tryCounter: number;

    sliderInit(this: RaffleI): Promise<void>;

    getGame(this: RaffleI): Promise<void>;
    send(this: RaffleI): Promise<void>;
    startRaffle(this: RaffleI, force?: boolean): Promise<void>;
    startTrying(this: RaffleI): Promise<void>;

    renderContent(this: RaffleI): React.ReactNode;
    renderStart(this: RaffleI): React.ReactNode;
    renderDecors(this: RaffleI): React.ReactNode;
    renderPrizes(this: RaffleI): React.ReactNode;
    renderHead(this: RaffleI): React.ReactNode;
    renderRaffle(this: RaffleI): React.ReactNode;
}

export default RaffleI;
export type { PrizeItemT, ResultPrizeT };
