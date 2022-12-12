import React from 'react';
import { Image } from './Image'

export const ExpandingPhoto = (props) => {
    const [clicked, setClicked] = React.useState(false)

    const unclickedStyle = {
        backgroundColor: '#FFB0E2', height: '0.8vw', width: '0.8vw', borderRadius: '0.8vw', marginLeft: '0.3vw', border: 'none'
    }

    const clickedStyle = {
        backgroundColor: '#FFB0E2', height: props.clickedHeight, width: props.clickedWidth, borderRadius: '2vw', marginLeft: '0.3vw', border: 'none', marginTop: props.clickedMarginTop, position: 'absolute', filter: 'drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.3))'
    }
    


    return (
    <div>
        <button
        style={{border: 0, background: 'transparent'}}
        onClick={() => {
            if (clicked) {
                setClicked(false)
            } else {
                setClicked(true)
            }
            
        }}>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', width: props.width, fontSize: '0.9vw', fontFamily: 'Work Sans', padding: '0.5vw'}}>
            {props.text}
            <div 
                style={clicked ? clickedStyle : unclickedStyle}
            >
                {clicked ? 
                <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start'}}><div style={{color: 'white', padding: '1vw', fontSize: '1vw'}}>✖️</div>
                <Image height={props.imgHeight} width={props.imgWidth} source={props.source} /></div> : null
                }
            </div>
        </div>
        </button>
    </div>
    )
}