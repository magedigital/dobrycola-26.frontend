import React from 'react';

import I from '../types.ts';

const renderTableCol: I['renderTableCol'] = function ({ row, name }) {
    if (name === 'code') {
        return <>{row.code}</>;
    }

    if (name === 'date') {
        return <>{row.registered}</>;
    }
};

export default renderTableCol;
