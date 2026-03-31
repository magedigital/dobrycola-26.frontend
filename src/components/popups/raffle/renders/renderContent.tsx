import React from 'react';

import Button from '@components/button/Button.tsx';
import Checkbox from '@components/checkbox/Checkbox.tsx';
import List from '@components/list/List.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { inProcess, isComplete, isConfirm, loadingKey } = this.state;
    const key = isComplete ? 'complete' : inProcess ? 'process' : 'start';

    return (
        <div className="popup__innerBox _FULL_W _block">
            {this.renderHead()}
            <div className="popup__content _COL _COL_H_CENTER">
                <List
                    renderKey={key}
                    items={[{ _id: key }]}
                    parentClass="popup__raffleSub"
                    itemClass="popup__raffleSubItem"
                    itemStyleProps={[]}
                    parentStyleProps={['width']}
                    parentRealStyleProps={['width']}
                    render={({ item }) => ({
                        item: (
                            <div className="popup__raffleSubInner">
                                {item._id === 'start' && (
                                    <div className="popup__subTitle">
                                        Участие в розыгрыше - <span>1</span> балл
                                    </div>
                                )}
                                {item._id === 'complete' && (
                                    <div className="popup__raffleSubResult">Твой приз:</div>
                                )}
                            </div>
                        ),
                    })}
                    resizeWidth={true}
                />

                {this.renderRaffle()}

                <List
                    renderKey={key}
                    items={key ? [{ _id: key }] : []}
                    parentClass="popup__raffleFoot"
                    itemClass="popup__raffleFootInner"
                    itemStyleProps={[]}
                    parentStyleProps={['width']}
                    parentRealStyleProps={['width']}
                    render={({ item }) => ({
                        item: (
                            <div className="popup__raffleFootItem">
                                {item._id === 'start' && (
                                    <>
                                        <div className="popup__raffleFootCheckbox">
                                            <Checkbox
                                                value={!!isConfirm}
                                                onChange={async () => {
                                                    await this.asyncSetState({
                                                        isConfirm: !isConfirm,
                                                    });
                                                }}
                                            >
                                                Подтверждаю участие (спишется 1 балл)
                                            </Checkbox>
                                        </div>
                                        <div className="popup__raffleFootButtons">
                                            <div className="popup__raffleFootButton">
                                                <Button
                                                    className="_boldBorder _purpleColor"
                                                    onClick={() => {
                                                        this.startRaffle();
                                                    }}
                                                    loading={loadingKey === 'start'}
                                                >
                                                    Играть
                                                </Button>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {item._id === 'process' && (
                                    <>
                                        <div className="popup__raffleFootButtons">
                                            <div className="popup__raffleFootButton">
                                                <Button className="_lightBlueColor">
                                                    разыгрываем...
                                                </Button>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {item._id === 'complete' && (
                                    <>
                                        <div className="popup__raffleFootButtons _ROW">
                                            <div className="popup__raffleFootButton">
                                                <Button
                                                    className="_boldBorder _darkPinkColor"
                                                    onClick={this.close.bind(this)}
                                                >
                                                    закрыть окно
                                                </Button>
                                            </div>
                                            <div className="popup__raffleFootButton">
                                                <Button
                                                    className="_boldBorder _purpleColor"
                                                    onClick={() => {
                                                        this.startRaffle(true);
                                                    }}
                                                    loading={loadingKey === 'start'}
                                                >
                                                    Играть ещё
                                                </Button>
                                            </div>
                                        </div>
                                    </>
                                )}
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
