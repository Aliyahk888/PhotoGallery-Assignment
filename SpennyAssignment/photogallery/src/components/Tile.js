import React from 'react';

function Tile(props) {

    const styles = {
    Tile: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'white',
        backgroundImage: `url(${props.image})` 
        
      
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}
    return (
        <div style={{
            ...styles.Tile,
            ...styles[props.size],
        }}>

        </div>
    )



}

export default Tile;