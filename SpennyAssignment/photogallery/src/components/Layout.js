import React from 'react';

import Tile from './Tile.js';

function Layout(props) {
    return (
        <div style={styles.pin_container}>
            <Tile size="small" image={props.pictures[0]}/>
            <Tile size="medium" image={props.pictures[1]} />
            <Tile size="large" image={props.pictures[2]}/>
            <Tile size="small" image={props.pictures[3]}/>
            <Tile size="medium" image={props.pictures[4]}/>
            <Tile size="large" image={props.pictures[5]}/>
            <Tile size="small" image={props.pictures[6]}/>
            <Tile size="medium" image={props.pictures[7]}/>
            <Tile size="large" image={props.pictures[8]}/>
            <Tile size="small" image={props.pictures[9]}/>
            <Tile size="medium" image={props.pictures[10]}/>
            <Tile size="large" image={props.pictures[11]}/>
            <Tile size="small" image={props.pictures[12]}/>
            <Tile size="medium" image={props.pictures[13]}/>
            <Tile size="large" image={props.pictures[14]}/>
            <Tile size="small" image={props.pictures[15]}/>
        </div>
    
    )
        

}


const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
}

export default Layout;