import { SavedRafflePrizeT } from '../types';

type ReturnT = {
    prize: SavedRafflePrizeT | undefined;
    name: string;
};

export default function getSavedRaffle(): ReturnT {
    const name = 'raffle';
    let prize: SavedRafflePrizeT | undefined;

    try {
        const p = localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)!) : undefined;

        prize = p;
    } catch (error) {
        localStorage.removeItem(name);
    }

    return {
        prize,
        name,
    };
}
