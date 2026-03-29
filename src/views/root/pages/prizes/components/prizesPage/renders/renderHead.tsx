import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    const { title, description } = this.props;

    return (
        <div className="prizesPage__head _COL _COL_H_CENTER">
            <h3 className="prizesPage__headTitle _TITLE _inner">{title}</h3>
            {description && (
                <p
                    className="prizesPage__headDescription"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            )}
        </div>
    );
};

export default renderHead;
