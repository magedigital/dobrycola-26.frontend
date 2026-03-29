import { appStore } from '@store/store';

export default function getLink(): string {
    const { authUser } = appStore.getState();

    return `https://dobrycola-promo.ru/?inv=${authUser?.userId}`;
}
