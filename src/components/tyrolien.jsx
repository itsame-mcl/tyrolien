import React from 'react';

const Tyrolien = (props) => {

    const style = {
        position: "absolute",
        top: props.actuel <= props.max ? 270 - (props.actuel/props.max) * (270-150) : 300,
        left: props.actuel <= props.max ? 80 + (props.actuel/props.max) * (470-80) : 520,
        transform: props.actuel <= props.max ? '' : 'rotate(90deg)'
    }

    return(
        <div style={{position: "relative", top: 0, left: 0}}>
            <img style={{position: "relative", top: 0, left: 0}} height={500} z-index={1} src="/images/tyrolien.png" />
            <img style={style} height={50} z-index={2} src="/images/personnage.png" />
        </div>
    )
}

export default Tyrolien;