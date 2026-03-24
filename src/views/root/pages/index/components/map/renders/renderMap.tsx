import React from 'react';

import I from '../types.ts';

const renderMap: I['renderMap'] = function () {
    return (
        <div className="indexMap__map _COL">
            {this.renderNav()}
            {this.renderBacks()}
            {this.renderLocations()}
            {this.renderSections()}
        </div>
    );
};

export default renderMap;
