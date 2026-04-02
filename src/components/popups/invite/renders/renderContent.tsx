import React from 'react';

import Button from '@components/button/Button.tsx';
import List from '@components/list/List.tsx';
import { appStore } from '@store/store.tsx';

import I from '../types.ts';

import getLink from '../utils/getLink.ts';

const renderContent: I['renderContent'] = function (this: I) {
    const { isCopy } = this.state;
    const link = getLink();
    const userId = appStore.getState().authUser?.userId;

    return (
        <div className="popup__innerBox">
            <div>
                <div className="popup__head _COL _COL_H_CENTER">
                    <div className="popup__title">Пригласи друга</div>
                </div>
                <div className="popup__invite _COL _COL_H_CENTER">
                    <p className="popup__inviteText _main">
                        Пригласи друга для участия в&nbsp;акции!
                    </p>
                    <p className="popup__inviteText">
                        Ты получишь дополнительные баллы, после того, как друг зарегистрирует первый
                        код. Количество друзей не ограничено.
                    </p>
                    <div className="popup__inviteInfo _COL _COL_H_CENTER">
                        <p className="popup__inviteText">
                            Ссылка для приглашения:
                            <br />
                            <a href={link} target="_blank" rel="noreferrer">
                                {link}
                            </a>
                        </p>
                        <p className="popup__inviteText _code">
                            Промокод для друга: <b>{userId}</b>
                        </p>
                    </div>
                </div>
                <List
                    renderKey={isCopy ? '1' : '0'}
                    items={!isCopy ? [{ _id: 'copy' }] : [{ _id: 'close' }]}
                    parentClass="popup__dynamicButtons"
                    itemClass="popup__dynamicButton"
                    itemStyleProps={[]}
                    parentStyleProps={['width']}
                    parentRealStyleProps={['width']}
                    render={({ item }) => ({
                        item: (
                            <div className="popup__button _auto">
                                <Button
                                    onClick={() => {
                                        if (item._id === 'close') {
                                            this.close();
                                        } else {
                                            this.copyHandler();
                                        }
                                    }}
                                    className={this.getClass(
                                        '_boldBorder',
                                        item._id === 'close' ? '_purpleColor' : '_darkPinkColor',
                                    )}
                                >
                                    {item._id === 'close' ? 'закрыть' : 'КОПИРОВАТЬ ссылку'}
                                </Button>
                            </div>
                        ),
                    })}
                    resizeWidth={true}
                />
            </div>
        </div>
    );
};

export default renderContent;
