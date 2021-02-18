import React from 'react';

// mode true = right, mode false = wrong
export default function Votar({ mode }) {
    return (
        <div style={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', right: "0px", left: "0px", textAlign: "center", zIndex: 100, width: "80vw", maxWidth: "320px" }}>
            {mode ?
                <img draggable="false" src="/img/correct.svg" width="100%" />
                :
                <img draggable="false" src="/img/wrong.svg" width="100%" />}
        </div>
    );
}
