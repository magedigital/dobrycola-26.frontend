import React from 'react';

import Button from '@components/button/Button.tsx';
import Fade from '@components/fade/Fade.tsx';
import Icon from '@components/icon/Icon.tsx';
import Link from '@components/link/Link.tsx';
import LoaderBlock from '@components/loaderBlock/LoaderBlock.tsx';
import Media from '@components/media/Media.tsx';
import { appStore } from '@store/store.tsx';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

const renderMain: I['renderMain'] = function () {
    const { loadingKey, isCopy, data } = this.state;
    const authUser = this.props.authUser!;

    return (
        <div className={`profile__main ${data ? '_ready' : ''}`}>
            <div className="profile__mainBlocks">
                <div className="profile__mainBlock _info _COL">
                    <div className="profile__mainName">
                        {authUser?.personal.firstName} {authUser?.personal.lastName}
                        <Media check={(d) => d === 'mobile'}>
                            <div
                                className="profile__mainCopy"
                                onClick={() => {
                                    // handlerPopup('idPopup', { isShow: true });
                                }}
                            >
                                <Fade
                                    className="profile__mainCopySuccess _FULL _ROW _ROW_CENTER"
                                    isShow={!!isCopy}
                                >
                                    Скопировано
                                </Fade>
                                ID {authUser.userId}
                                <i
                                    className="profile__mainCopyIcon _CLICK"
                                    onClick={(e) => {
                                        e.stopPropagation();

                                        this.copyHandler();
                                    }}
                                >
                                    <Icon name="copy" />
                                </i>
                            </div>
                        </Media>
                    </div>
                    <div className="profile__mainLinks _ROW">
                        <Media check={(d) => d === 'desktop'}>
                            <div
                                className="profile__mainCopy _CLICK"
                                onClick={() => {
                                    // handlerPopup('idPopup', { isShow: true });
                                }}
                            >
                                <Fade
                                    className="profile__mainCopySuccess _FULL _ROW _ROW_CENTER"
                                    isShow={!!isCopy}
                                >
                                    Скопировано
                                </Fade>
                                ID {authUser?.userId}
                                <i
                                    className="profile__mainCopyIcon _CLICK"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        this.copyHandler();
                                        sendGoal('inviteFriendCopyBtn');
                                    }}
                                >
                                    <Icon name="copy" />
                                </i>
                            </div>
                        </Media>
                        <Link
                            className="profile__mainLink _pink"
                            pageName={
                                authUser?.status === 'EXTRA_ANKET_REQUIRED' ? 'fullAnket' : 'anket'
                            }
                            callback={() => {
                                sendGoal('profileEditData');
                            }}
                        >
                            Изменить данные
                        </Link>
                        <div
                            className={`profile__mainLink _purple _CLICK ${loadingKey === 'logout' ? '_loading' : ''}`}
                            onClick={this.requestLogout.bind(this)}
                        >
                            Выход
                            <LoaderBlock
                                className="profile__mainLinkLoader"
                                isShow={loadingKey === 'logout'}
                            />
                        </div>
                    </div>
                </div>
                <div className="profile__mainBlock _COL _score">
                    <div className="profile__mainScore">
                        У тебя <span className="profile__mainScoreCount">{data?.balance || 0}</span>{' '}
                        {data?.balanceTitle}
                    </div>
                    <div
                        className="profile__mainLink _blue _CLICK"
                        onClick={() => {
                            appStore.getState().setPopup({ name: 'ballsPopup' });
                            sendGoal('profileHistory');
                        }}
                    >
                        История
                    </div>
                </div>
            </div>
            <div className="profile__mainButtons">
                <div className="profile__mainButtonsInner">
                    <div className="profile__mainButton">
                        <Button
                            className="_darkPinkColor _boldBorder _minSize"
                            onClick={() => {
                                appStore.getState().setPopup({ name: 'codePopup' });
                                // sendGoal('regCodeBtn, profileRegCodeBtn', true);
                            }}
                        >
                            зарегистрировать код
                        </Button>
                    </div>
                </div>
                <div className="profile__mainButtonsInner _invite">
                    <div className="profile__mainButton">
                        <Button
                            className="_blueColor _boldBorder _minSize"
                            onClick={() => {
                                appStore.getState().setPopup({ name: 'invitePopup' });
                                sendGoal('inviteFriendBtn');
                            }}
                        >
                            ПРИГЛАСИ ДРУГА
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default renderMain;
