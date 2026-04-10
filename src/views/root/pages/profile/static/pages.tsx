import React from 'react';

import RootI from '../types.ts';

import Cheques from '../pages/cheques/Cheques.tsx';
import Index from '../pages/index/Index.tsx';
import Prizes from '../pages/prizes/Prizes.tsx';

export const profilePages = {
    'profile-codes': {
        title: 'Коды',
        render(this: RootI) {
            const { data, content } = this.state;

            return (
                <Index
                    content={content!}
                    data={data!}
                    setRenderKey={this.setPagesRenderKey.bind(this)}
                />
            );
        },
    },
    'profile-cheques': {
        title: 'Акция в «Пятёрочке»',
        render(this: RootI) {
            const { data, content } = this.state;

            return (
                <Cheques
                    data={data!}
                    content={content!}
                    setRenderKey={this.setPagesRenderKey.bind(this)}
                />
            );
        },
    },
    'profile-prizes': {
        title: 'Призы',
        render(this: RootI) {
            const { data } = this.state;
            const { authUser } = this.props;

            return <Prizes authUser={authUser!} data={data!} />;
        },
    },
} as const;
