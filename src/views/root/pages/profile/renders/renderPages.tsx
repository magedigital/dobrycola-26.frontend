import React from 'react';

import Link from '@components/link/Link.tsx';
import Pages from '@components/pages/Pages.tsx';

import I from '../types.ts';

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
                            {page.title}
                        </Link>
                    );
                })}
            </div>
            <Pages
                parentClass="profile__pagesItems"
                itemClass="profile__pagesItem"
                context={this}
                pages={profilePages}
                filter={(n) => n === 'profile'}
                parentStyleProps={['width']}
                parentRealStyleProps={['width']}
                renderKey={pagesRenderKey}
                parentName="profile"
            />
        </div>
    );
};

export default renderPages;
