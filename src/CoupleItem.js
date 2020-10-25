import React from 'react';
import { Grid, Paper, Card, Button } from '@material-ui/core';

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

class CoupleItem extends React.Component {
    constructor() {
        super()
        this.state = {
            randA: 0,
            randB: 0
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:3001/coupleRandom", requestOptions)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        randA: result.randA,
                        randB: result.randB
                    });
                },
                (error) => {
                    this.setState({
                        randA: -1,
                        randB: -1
                    });
                }
            )
    }

    render() {
        return (
            <Grid container justify="center" spacing={4}>
                <Grid item xs={12} sm={12} md={6}>
                    {this.state.randA}
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    {this.state.randB}
                </Grid>
            </Grid>
        )
    }
}

export default CoupleItem;