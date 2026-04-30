import React from 'react';

import RootI from '../types.ts';

import Cheques from '../pages/cheques/Cheques.tsx';
import Index from '../pages/index/Index.tsx';
import Prizes from '../pages/prizes/Prizes.tsx';

export const profilePages = {
    'profile-codes': {
        title: 'Коды',
        render(this: RootI) {
            const { content } = this.state;
            const { profileData } = this.props;

            return (
                <Index
                    content={content!}
                    data={profileData!}
                    setRenderKey={this.setPagesRenderKey.bind(this)}
                />
            );
        },
    },
    'profile-cheques': {
        title: 'Акция в «Пятёрочке»',
        render(this: RootI) {
            const { content } = this.state;
            const { profileData } = this.props;

            return (
                <Cheques
                    data={profileData!}
                    content={content!}
                    setRenderKey={this.setPagesRenderKey.bind(this)}
                />
            );
        },
    },
    'profile-prizes': {
        title: 'Призы',
        render(this: RootI) {
            const { authUser, profileData } = this.props;

            return <Prizes authUser={authUser!} data={profileData!} />;
        },
    },
} as const;
