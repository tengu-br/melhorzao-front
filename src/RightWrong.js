import React from 'react';

// mode true = right, mode false = wrong
export default function Votar({ mode }) {
    return (

        mode ?
            <img draggable="false" src="/img/correct.svg" style={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', right: "0px", left: "0px", textAlign: "center", zIndex: 0, width: "400px" }} />
            :
            <img draggable="false" src="/img/wrong.svg" style={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', right: "0px", left: "0px", textAlign: "center", zIndex: 0, width: "400px" }} />
    );
}
