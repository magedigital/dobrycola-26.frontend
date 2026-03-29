import React from 'react';

import I from '../types.ts';

const renderTableEmpty: I['renderTableEmpty'] = function (this: I) {
    return (
        <>
            <h3>Кодов пока нет</h3>
        </>
    );
};

export default renderTableEmpty;
