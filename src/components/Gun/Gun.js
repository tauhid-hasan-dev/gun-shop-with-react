import React from 'react';

const Gun = (props) => {
    const {name, img, bullet, action, price, capacity} = props.gun;
    console.log(name, img, bullet, action, price, capacity);
    return (
        <div>
            <h3></h3>
        </div>
    );
};

export default Gun;