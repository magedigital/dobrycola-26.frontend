import React from 'react';

import Default from '@components/default/Default.tsx';
import Icon from '@components/icon/Icon.tsx';
import Media from '@components/media/Media.tsx';

import TopBarI from './types.ts';

import { AppRouter } from '../../../../index.tsx';
import render5ka from './renders/render5ka.tsx';
import renderActions from './renders/renderActions.tsx';
import renderLogo from './renders/renderLogo.tsx';

class TopBar extends Default<TopBarI['props'], TopBarI['state']> implements TopBarI {
    parent: TopBarI['parent'];

    constructor(props: TopBarI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render5ka = render5ka;
    renderLogo = renderLogo;
    renderActions = renderActions;

    render() {
        const { className, mode, pageCloseHandler } = this.props;

        return (
            <div
                ref={this.parent}
                className={this.getClass('topBar _SECTION', className, this.setClass(mode))}
            >
                <div className="topBar__inner _INNER">
                    {this.renderLogo()}
                    {this.render5ka()}
                    <Media check={(d) => d === 'desktop'}>{this.renderActions()}</Media>
                    <Media check={(d) => d === 'mobile' && !mode}>
                        <img
                            src={require('@media/user-profile.svg').default}
                            alt=""
                            className="topBar__profile"
                            onClick={() => {
                                AppRouter.changePage({ pageName: 'profile' });
                            }}
                        />
                    </Media>
                    <Media check={(d) => d === 'mobile' && mode === '5ka'}>
                        <img
                            src={require('@media/5ka/user-profile.svg').default}
                            alt=""
                            className="topBar__profile"
                            onClick={() => {
                                AppRouter.changePage({ pageName: 'profile' });
                            }}
                        />
                    </Media>
                    <Media check={(d) => d === 'mobile' && !!mode && mode !== '5ka'}>
                        <div className="closeBtn topBar__close" onClick={pageCloseHandler}>
                            <Icon name="popup-close" />
                        </div>
                    </Media>
                </div>
            </div>
        );
    }
}

export default TopBar;
