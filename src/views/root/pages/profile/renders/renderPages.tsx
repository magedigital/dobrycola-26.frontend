import React from 'react';

import Link from '@components/link/Link.tsx';
import Media from '@components/media/Media.tsx';
import Pages from '@components/pages/Pages.tsx';

import I from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';
import { profilePages } from '../static/pages.tsx';

const renderPages: I['renderPages'] = function () {
    const { pagesRenderKey } = this.state;

    return (
        <div className="profile__pages _FULL_W">
            <div className="profile__pagesTabs _FULL_W _ROW">
                {(Object.keys(profilePages) as (keyof typeof profilePages)[]).map((name) => {
                    const page = profilePages[name];

                    return (
                        <Link
                            className="profile__pagesTab _COL _COL_CENTER"
                            key={name}
                            pageName={name}
                        >
                            <Media check={(d) => d === 'desktop' || name !== 'profile-cheques'}>
                                {page.title}
                            </Media>
                            <Media check={(d) => d === 'mobile' && name === 'profile-cheques'}>
                                Чеки
                            </Media>
                        </Link>
                    );
                })}
            </div>
            <Pages
                parentClass="profile__pagesItems"
                itemClass="profile__pagesItem"
                context={this}
                pages={profilePages}
                filter={(n) => AppRouter.pages[n].parentName === 'profile'}
                parentStyleProps={['width']}
                parentRealStyleProps={['width']}
                renderKey={pagesRenderKey}
                parentName="profile"
            />
        </div>
    );
};

export default renderPages;
