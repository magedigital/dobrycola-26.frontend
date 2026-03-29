import React from 'react';

import I from '../types.ts';

const renderTableCol: I['renderTableCol'] = function ({ row, name }) {
    if (name === 'date') {
        return <>{row.datetime}</>;
    }

    if (name === 'balls') {
        return <>{row.sum}</>;
    }

    if (name === 'comment') {
        return <>{row.comment}</>;
    }
};

export default renderTableCol;
