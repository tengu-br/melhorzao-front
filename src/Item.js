import React from 'react';

class Item extends React.Component {
    constructor() {
        super()
        this.state = {
            // trocar por gerador de numeros aleatorios via api com range da qtd de players
            num: Math.random()*10
        }
    }
    render() {
        return (
            <p>
                {this.state.num}
            </p>
        )
    }
}

export default Item;