import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    return (
        <div className="indexHeader__content _COL">
            <div className="indexHeader__contentTitle" />
            <p className="indexHeader__contentText">
                <span>C 01 апреля 2026 по 31 июля 2026</span> регистрируй коды{' '}
                <br className="_MOBILE" />с продукцией Добрый® <br className="_MOBILE" />и
                выигрывай топовые призы!
            </p>
        </div>
    );
};

export default renderContent;
