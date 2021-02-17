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
                },
                (error) => {
                    // console.log(error)
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

    function handleClick(e, param) {
        e.preventDefault()

        // PARAM TRUE = A, FALSE = B
        var nameWinner, eloWinner, nameLoser, eloLoser

        if (param) {
            nameWinner = rand.playerA.name
            eloWinner = rand.playerA.elo
            nameLoser = rand.playerB.name
            eloLoser = rand.playerB.elo
        } else {
            nameWinner = rand.playerB.name
            eloWinner = rand.playerB.elo
            nameLoser = rand.playerA.name
            eloLoser = rand.playerA.elo
        }

        fetch("http://127.0.0.1:3001/matchupSync", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "playerA": { "name": nameWinner, "elo": eloWinner }, "playerB": { "name": nameLoser, "elo": eloLoser } }),
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(
                (result) => {
                    console.log(result)
                    // refresh page
                    location = location
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    return (
        <Grid container justify="center" spacing={4}>
            <Grid item xs={12} sm={12} md={6}>
                <h1>Nome: {rand.playerA.name}</h1>
                <h2>Elo: {rand.playerA.elo}</h2>
                <Button variant="contained" color="primary" onClick={(e) => handleClick(e, true)}>Isso é melhor</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <h1>Nome: {rand.playerB.name}</h1>
                <h2>Elo: {rand.playerB.elo}</h2>
                <Button variant="contained" color="primary" onClick={(e) => handleClick(e, false)}>Isso é melhor</Button>
            </Grid>
        </Grid>
    )
}

export default CoupleItem;