import React from 'react';

import I from '../types.ts';

const renderTableEmpty: I['renderTableEmpty'] = function (this: I) {
    return (
        <>
            <h3>Победители не найдены</h3>
            <p>Попробуйте изменить критерии поиска</p>
        </>
    );
};

export default renderTableEmpty;
