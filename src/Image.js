import React from 'react';

export const Image = (props) => {
    

    return (
    <div>
        <img src={require('./images/' + props.source + '.png')} style={{height: props.imgHeight, width: props.imgWidth, paddingTop: "5vh"}}></img>
    </div>
    )
}