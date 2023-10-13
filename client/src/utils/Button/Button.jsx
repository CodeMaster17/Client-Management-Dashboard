import React, { useState, useEffect } from 'react';

const ButtonComponent = ({ text, variant, onClickFunction }) => {
    const [color, setColor] = useState('#30aefc');

    useEffect(() => {
        if (variant === 'white') {
            setColor('white');
        } else if (variant === 'blue') {
            setColor('#30aefc');
        } else if (variant === 'orange') {
            setColor('#FF676E');
        }
    }, [variant]);

    return <button className='button' style={{ backgroundColor: color }}  onClick={onClickFunction} >{text}</button>;
};

export default ButtonComponent;
