import React from 'react';

import I from '../types.ts';

import { mapSections } from '../static/locations.ts';

const renderNav: I['renderNav'] = function () {
    const { currentSection } = this.state;

    return (
        <div className="indexMap__mapNav">
            {(Object.keys(mapSections) as (keyof typeof mapSections)[]).map((n) => {
                const section = mapSections[n];

                return (
                    <div
                        className={this.getClass(
                            'indexMap__mapNavLink _CLICK',
                            currentSection === n && '_active',
                        )}
                        key={n}
                        onClick={this.scrollToSection.bind(this, n, 300)}
                    >
                        {section.title}
                    </div>
                );
            })}
        </div>
    );
};

export default renderNav;
