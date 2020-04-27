import React from 'react';

import './Box.css';
import { BoxConstants } from './Box.constants';

const Box = () => {
    const { text } = BoxConstants;
    return <div className="box">
        {text}
    </div>
};

export default Box;