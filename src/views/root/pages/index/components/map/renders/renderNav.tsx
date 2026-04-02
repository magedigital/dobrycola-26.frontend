import React from 'react';

import sendGoal from '@utils/sendGoal.ts';

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
                        onClick={() => {
                            this.scrollToSection(n);

                            if (n === 'game') {
                                sendGoal('mapGameTab');
                            } else if (n === 'partners') {
                                sendGoal('mapPartnersTab');
                            }
                        }}
                    >
                        {section.title}
                    </div>
                );
            })}
        </div>
    );
};

export default renderNav;
