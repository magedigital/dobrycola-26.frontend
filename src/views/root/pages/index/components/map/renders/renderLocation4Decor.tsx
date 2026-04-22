import React from 'react';

import I from '../types.ts';

const renderLocation4Decor: I['renderLocation4Decor'] = function () {
    return (
        <>
            <img
                src={require('@media/map/loc4-light-1.svg').default}
                alt=""
                className="indexMap__mapLocation4Light _1"
            />
            <img
                src={require('@media/map/loc4-border-1.svg').default}
                alt=""
                className="indexMap__mapLocation4Border _1"
            />
            <img
                src={require('@media/map/loc4-light-2.svg').default}
                alt=""
                className="indexMap__mapLocation4Light _2"
            />
            <img
                src={require('@media/map/loc4-border-2.svg').default}
                alt=""
                className="indexMap__mapLocation4Border _2"
            />
            <img
                src={require('@media/map/loc4-light-3.png')}
                alt=""
                className="indexMap__mapLocation4Light _3"
            />
            <img
                src={require('@media/map/loc4-light-4.png')}
                alt=""
                className="indexMap__mapLocation4Light _4"
            />
            <img
                src={require('@media/map/loc4-light-5.png')}
                alt=""
                className="indexMap__mapLocation4Light _5"
            />
            <div className="indexMap__mapLocation4Point _left _1"></div>
            <div className="indexMap__mapLocation4Point _left _2"></div>
            <div className="indexMap__mapLocation4Point _left _3"></div>
            <div className="indexMap__mapLocation4Point _right _1"></div>
            <div className="indexMap__mapLocation4Point _right _2"></div>
            <div className="indexMap__mapLocation4Point _right _3"></div>
            <div className="indexMap__mapLocation4Point _right _4"></div>
            <div className="indexMap__mapLocation4Point _right _5"></div>
            <div className="indexMap__mapLocation4Point _right _6"></div>
        </>
    );
};

export default renderLocation4Decor;
