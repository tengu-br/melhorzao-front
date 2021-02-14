import React, { useState, useEffect } from 'react';
import { Grid, Paper, Card, Button } from '@material-ui/core';

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function CoupleItem() {

    const [rand, setRand] = useState({
        playerA: {
            name: "",
            elo: ""
        },
        playerB: {
            name: "",
            elo: ""
        },
    });

    useEffect(() => {
        fetch("http://127.0.0.1:3001/coupleRandom", requestOptions)
            .then(response => response.json())
            .then(
                (result) => {
                    setRand({ ...result });
                    console.log({ ...result })
                },
                (error) => {
                    console.log(error)
                    setRand({
                        playerA: {
                            name: "",
                            elo: -1
                        },
                        playerB: {
                            name: "",
                            elo: -1
                        },
                    });
                }
            )
    }, []);

    return (
        <Grid container justify="center" spacing={4}>
            <Grid item xs={12} sm={12} md={6}>
                <h1>Nome: {rand.playerA.name}</h1>
                <h2>Elo: {rand.playerA.elo}</h2>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
            <h1>Nome: {rand.playerB.name}</h1>
            <h2>Elo: {rand.playerB.elo}</h2>
            </Grid>
        </Grid>
    )
}

export default CoupleItem;