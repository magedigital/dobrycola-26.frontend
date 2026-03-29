import React from 'react';

import Link from '@components/link/Link.tsx';
import Pages from '@components/pages/Pages.tsx';

import I from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';
import { prizesPages } from '../static/pages.tsx';

const renderPages: I['renderPages'] = function () {
    const { pagesRenderKey, content } = this.state;

    return (
        <div className="profile__pages _FULL_W">
            <div className="profile__pagesTabsWrapper _FULL_W _NOSCROLL">
                <div className="profile__pagesTabs _FULL_W">
                    {(Object.keys(prizesPages) as (keyof typeof prizesPages)[]).map((name) => {
                        const page = prizesPages[name];

                        return (
                            <div className="profile__pagesTabWrapper" key={name} data-id={name}>
                                <Link
                                    className="profile__pagesTab _auto _COL _COL_CENTER"
                                    pageName={name}
                                    callback={() => {
                                        this.scrollToTab();
                                    }}
                                >
                                    {page.title}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
            {content && (
                <Pages
                    parentClass="profile__pagesItems"
                    itemClass="profile__pagesItem"
                    context={this}
                    pages={prizesPages}
                    filter={(n) => AppRouter.pages[n].parentName === 'prizes'}
                    parentStyleProps={['width']}
                    parentRealStyleProps={['width']}
                    renderKey={pagesRenderKey}
                    parentName="prizes"
                />
            )}
        </div>
    );
};

export default renderPages;
