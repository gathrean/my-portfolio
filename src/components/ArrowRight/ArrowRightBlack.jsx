import React from 'react';

import './ArrowRight.css';
import ArrowUpRight from '../../assets/icons/arrow-up-right.svg';

const ArrowRightIcon = () => {
    return (
        <img
            src={ArrowUpRight}
            alt="Arrow Up Right"
            style={{
                filter: 'invert(100%)',
                width: '0.8em',
                height: '0.8em',
                marginLeft: '10px',
            }}
            className="arrow-right-icon"
        />
    );
};

export default ArrowRightIcon;
