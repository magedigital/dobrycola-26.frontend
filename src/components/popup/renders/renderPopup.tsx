import React from 'react';

import Fade from '@components/fade/Fade.tsx';
import List from '@components/list/List.tsx';
import LoaderBlock from '@components/loaderBlock/LoaderBlock.tsx';
import Media from '@components/media/Media.tsx';

import Menu from '../../../views/root/components/menu/Menu.tsx';
import TopBar from '../../../views/root/components/topBar/TopBar.tsx';

import I, { PopupRenderContentT } from '../types.ts';

const renderPopupContent = function (
    this: I,
    data: { render: PopupRenderContentT; id?: string; canClose?: boolean },
) {
    const { isMenuShow } = this.state;
    const isInit = this.props.isInit ?? this.state.isInit;

    return (
        <div className="popup__wrapperBox">
            <div className="popup__topBar">
                <TopBar
                    mode="popup"
                    setMenuState={this.setMenuState.bind(this)}
                    pageCloseHandler={this.close.bind(this)}
                />
            </div>
            <Fade isShow={!!isMenuShow} className="popup__menu">
                <Menu setState={this.setMenuState.bind(this)} />
            </Fade>
            <div className="popup__inner _COL">
                <Media check={(d) => d === 'desktop'}>
                    {(data.canClose ?? true) && this.renderClose()}
                </Media>
                {data.render({ id: data.id })}
                {typeof isInit === 'boolean' && (
                    <LoaderBlock
                        isShow={isInit !== true}
                        className="popup__loader"
                        loaderClassName="_back"
                    />
                )}
            </div>
        </div>
    );
};

const renderPopup: I['renderPopup'] = function ({ render, ...props }) {
    const { isHeightMin } = this.state;
    const id = props.id;
    const isInit = this.props.isInit ?? this.state.isInit;
    const withIds = Object.keys(props).includes('id');

    return (
        <div
            ref={this.parent}
            className={this.getClass(
                'popup _FULL',
                `_${this.name}`,
                isInit === false ? '_loading' : '',
                withIds ? '_withIds' : '',
                isHeightMin && '_minHeight',
            )}
        >
            {!withIds ? (
                <div className="popup__wrapper _FULL">
                    {renderPopupContent.call(this, { render, ...props })}
                </div>
            ) : (
                <List
                    renderKey={id}
                    items={id ? [{ _id: id }] : []}
                    parentClass="popup__box _FULL"
                    itemClass="popup__wrapper _FULL"
                    itemStyleProps={[]}
                    parentStyleProps={[]}
                    parentRealStyleProps={[]}
                    render={({ item }) => ({
                        item: renderPopupContent.call(this, { render, id: item._id }),
                    })}
                />
            )}
        </div>
    );
};

export default renderPopup;
