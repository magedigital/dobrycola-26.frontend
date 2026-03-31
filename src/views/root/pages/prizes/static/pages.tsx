import React from 'react';

import { appStore } from '@store/store.tsx';

import PrizesPage from '../components/prizesPage/PrizesPage.tsx';
import SpecPrize from '../components/specPrize/SpecPrize.tsx';

import RootI from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';

export const prizesPages = {
    'prizes-moment': {
        title: 'МОМЕНТАЛЬНЫЙ РОЗЫГРЫШ',
        render(this: RootI) {
            const { content } = this.state;

            return (
                <PrizesPage
                    name="moment"
                    title="Выиграй сразу"
                    metaTitle="Призы - Моментальный розыгрыш"
                    description="Участие в розыгрыше – <span>1</span> балл"
                    buttonText="играть в игру"
                    buttonOnClick={() => {
                        // changePage({ pageName: 'game-inner', ids: { 1: 'LOSYANTA' } });
                        appStore.getState().setPopup({ name: 'rafflePopup' });
                    }}
                    items={content!.components.prizes.instant.items}
                />
            );
        },
    },
    'prizes-balls': {
        title: 'КОПИ БАЛЛЫ',
        render(this: RootI) {
            const { content } = this.state;

            return (
                <PrizesPage
                    name="balls"
                    title={`Копи баллы и обменивай на\xa0призы`}
                    metaTitle="Призы - Копи баллы"
                    description="Регистрируй коды и получай <br class='_MOBILE' />по <span>1</span> баллу за каждый код, приводи друзей - зарабатывай еще баллы"
                    buttonText="Зарегистрировать код"
                    buttonOnClick={() => {
                        appStore.getState().setPopup({ name: 'codePopup' });
                    }}
                    items={content!.components.prizes.merch.items}
                />
            );
        },
    },
    'prizes-week': {
        title: 'ЕЖЕНЕДЕЛЬНО',
        render(this: RootI) {
            const { content } = this.state;

            return (
                <PrizesPage
                    name="weekly"
                    title="Еженедельный розыгрыш"
                    description="Для участия в розыгрыше требуется не менее <span>1</span> балла"
                    metaTitle="Призы - Еженедельно"
                    buttonText="Зарегистрировать код"
                    buttonOnClick={() => {
                        appStore.getState().setPopup({ name: 'codePopup' });
                    }}
                    items={content!.components.prizes.weekly.items}
                />
            );
        },
    },
    'prizes-month': {
        title: 'ежемесячный приз',
        render(this: RootI) {
            return (
                <SpecPrize
                    title="ежемесячный приз"
                    text="Для участия требуется не менее <span>1</span> балла на балансе"
                    name="Коллекция мерча и сертификат Яндекс Афиша"
                    button={{
                        text: 'зарегистрировать код',
                        onClick: () => {
                            appStore.getState().setPopup({ name: 'codePopup' });
                        },
                    }}
                    thumb={require('@media/inner/month-prize.jpg')}
                    mobThumb={require('@media/inner/month-prize-mob.jpg')}
                />
            );
        },
    },
    'prizes-spec': {
        title: 'СПЕЦИАЛЬНЫЙ ПРИЗ',
        render(this: RootI) {
            return (
                <SpecPrize
                    title="специальный приз"
                    text="Для участия в розыгрыше зарегистрируй 1 код и попади в ТОП-500 игроков недели"
                    name="Коллекция мерча"
                    button={{
                        text: 'перейти к игровым локациям',
                        onClick: () => {
                            AppRouter.changePage({
                                pageName: 'index',
                                search: [{ name: 'ancor', value: 'games' }],
                            });
                        },
                    }}
                    thumb={require('@media/inner/spec-prize.jpg')}
                    mobThumb={require('@media/inner/spec-prize-mob.jpg')}
                />
            );
        },
    },
} as const;
