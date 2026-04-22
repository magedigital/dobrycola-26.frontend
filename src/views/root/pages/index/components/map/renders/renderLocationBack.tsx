import React from 'react';

import I from '../types.ts';

const lines = [
    'fbccff',
    'f9b3ff',
    'e28dff',
    'ea64ff',
    'c83cff',
    'bc2bff',
    'b648ff',
    'bc58ff',
    'a06dff',
    '827bff',
    '84bdff',
    'a1d5ff',
];

const renderLocationBack: I['renderLocationBack'] = function (k) {
    return (
        <>
            <div className="indexMap__mapLocationLights"></div>
            <div className="indexMap__mapLocationLines">
                {lines.map((l, t) => (
                    <div
                        className="indexMap__mapLocationLine"
                        key={l}
                        data-index={t}
                        style={{ width: `${40 + (60 / 11) * t}%` }}
                    >
                        <svg>
                            <ellipse fill="none" stroke={`url(#line${k}${t})`} />
                            <defs>
                                <linearGradient id={`line${k}${t}`} x1="0" x2="0" y1="0" y2="100%">
                                    <stop stopColor={`#${l}`} />
                                    <stop offset=".5" stopColor={`#${l}`} stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                ))}
            </div>
        </>
    );
};

export default renderLocationBack;
