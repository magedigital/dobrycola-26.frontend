import React from 'react';

import Fade from '@components/fade/Fade.tsx';
import LoaderBlock from '@components/loaderBlock/LoaderBlock.tsx';
import Media from '@components/media/Media.tsx';

import Menu from '../../../views/root/components/menu/Menu.tsx';
import TopBar from '../../../views/root/components/topBar/TopBar.tsx';

import I from '../types.ts';

const renderPage: I['renderPage'] = function ({ render, className }) {
    const { isFixBarShow, isInit, isMenuShow, isPopupShow } = this.state;

    return (
        <div
            ref={this.parent}
            className={this.getClass(
                'page',
                className,
                isInit === false && '_loading',
                isPopupShow && '_disabled',
            )}
        >
            <div className={this.getClass('page__topBar _fix', isFixBarShow ? '_show' : '')}>
                <TopBar
                    mode={this.mode}
                    setMenuState={this.setMenuState.bind(this)}
                    pageCloseHandler={this.close.bind(this)}
                    className="_fix"
                />
            </div>
            <Fade isShow={!!isMenuShow} className="page__menu">
                <Menu setState={this.setMenuState.bind(this)} />
            </Fade>
            <Media check={(d) => d === 'desktop'}>
                {this.mode === 'inner' && <>{this.renderInnerClose()}</>}
            </Media>
            <div className="page__scroll" onScroll={this.checkScroll.bind(this)}>
                <div className="page__scrollInner">
                    <div className="page__topBar">
                        <TopBar
                            mode={this.mode}
                            setMenuState={this.setMenuState.bind(this)}
                            pageCloseHandler={this.close.bind(this)}
                        />
                    </div>
                    {typeof isInit === 'boolean' && (
                        <LoaderBlock isShow={!isInit} className="page__loader" />
                    )}
                    <div className="page__scrollContent _COL">{render()}</div>
                </div>
            </div>
        </div>
    );
};

export default renderPage;
