import React from 'react';

const Tyrolien = (props) => {
    let topPosition = 270;
    let leftPosition = 80;

    if (props.actuel <= props.max) {
        topPosition = 270 - (props.actuel/props.max) * (270-150);
        leftPosition = 80 + (props.actuel/props.max) * (470-80);
    } else {
        topPosition = 300;
        leftPosition = 520;
        const rotate = "90deg";
    }

    return(
        <div style={{position: "relative", top: 0, left: 0}}>
            <img style={{position: "relative", top: 0, left: 0}} height={500} z-index={1} src="/images/tyrolien.png" />
            <img style={{position: "absolute", top: topPosition, left: leftPosition}} height={50} z-index={2} src="/images/personnage.png" />
        </div>
    )
}

export default Tyrolien;