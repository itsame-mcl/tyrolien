import React, { useState, useEffect } from 'react';

const Tyrolien = (props) => {
    const [windowDimension, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      })

      const [componentDimension, computeCD] = useState({
        compHeight: Math.min(500,0.76*window.innerWidth),
        compWidth: (1/0.76)*Math.min(500,0.76*window.innerWidth)
      })

    const detectSize = () => {
    detectHW({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)
    
        return () => {
          window.removeEventListener('resize', detectSize)
        }
      }, [windowDimension])

    useEffect(() => {
        computeCD({
            compHeight: Math.min(500,0.76*window.innerWidth),
            compWidth: (1/0.76)*Math.min(500,0.76*window.innerWidth)
        })
    }, [windowDimension])

    const style = {
        position: "absolute",
        top: props.actuel <= props.max ? 0.54 * componentDimension.compHeight - (props.actuel/props.max) * (0.24 * componentDimension.compHeight) : 0.60 * componentDimension.compHeight,
        left: props.actuel <= props.max ? 0.12 * componentDimension.compWidth + (props.actuel/props.max) * (0.59 * componentDimension.compWidth) : 0.79 * componentDimension.compWidth,
        transform: props.actuel <= props.max ? '' : 'rotate(90deg)'
    }

    return(
        <div style={{position: "relative", top: 0, left: 0}}>
            <img style={{position: "relative", top: 0, left: 0}} heigth={componentDimension.compHeight} width={componentDimension.compWidth} z-index={1} src="/images/tyrolien.png" />
            <img className="tyrolien" style={style} z-index={2} heigth={componentDimension.compHeight * 0.1} width={componentDimension.compWidth * 0.05} src="/images/personnage.png" />
        </div>
    )
}

export default Tyrolien;