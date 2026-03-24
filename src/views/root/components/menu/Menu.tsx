import React from 'react';

import Default from '@components/default/Default.tsx';

import getNav from './methods/getNav.ts';
import keysCallback from './methods/keysCallback.ts';
import navItemHandler from './methods/navItemHandler.ts';

import MenuI from './types.ts';

import renderActions from './renders/renderActions.tsx';
import renderGames from './renders/renderGames.tsx';
import renderNav from './renders/renderNav.tsx';
import renderTop from './renders/renderTop.tsx';

class Menu extends Default<MenuI['props'], MenuI['state']> implements MenuI {
    parent: MenuI['parent'];

    constructor(props: MenuI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    getNav = getNav;
    navItemHandler = navItemHandler;

    keysCallback = keysCallback;

    renderTop = renderTop;
    renderNav = renderNav;
    renderActions = renderActions;
    renderGames = renderGames;

    render() {
        return (
            <div ref={this.parent} className="menu">
                <div className="menu__wrapper _SECTION">
                    <div className="menu__inner _INNER">
                        {this.renderTop()}
                        <div className="menu__content">
                            <div className="menu__contentNav">{this.renderNav()}</div>
                            <div className="menu__contentActions">{this.renderActions()}</div>
                        </div>
                        {this.renderGames()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
