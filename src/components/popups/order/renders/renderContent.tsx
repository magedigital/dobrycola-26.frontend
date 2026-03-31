import React from 'react';

import Button from '@components/button/Button.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { content, loadingKey } = this.state;

    return (
        <div className="popup__innerBox _block">
            {content && (
                <>
                    {this.renderHead()}
                    <div className="popup__content _FULL_W _COL _COL_H_CENTER">
                        {this.renderSlider()}
                        <div className="popup__buttons _ROW">
                            <div className="popup__button">
                                <Button
                                    onClick={this.send.bind(this)}
                                    className="_darkPinkColor _boldBorder"
                                    loading={loadingKey === 'send'}
                                >
                                    ЗАКАЗАТЬ ПРИЗ
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default renderContent;
