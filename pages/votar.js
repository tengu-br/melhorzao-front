import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Copyright from '../src/Copyright';
import { Grid, Paper, Card } from '@material-ui/core';
import CoupleItem from '../src/CoupleItem'

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

export default function Votar() {

    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)

    useEffect(() => {
        setScore(localStorage.getItem('currentScore'))
        setHighScore(localStorage.getItem('highScore'))
    }, []);

    useEffect(() => {
        localStorage.setItem('currentScore', score);
        if (score > highScore) {
            setHighScore(score)
            localStorage.setItem('highScore', score)
        }
    }, [score]);

    const [rand, setRand] = useState({
        playerA: {
            name: "",
            elo: "",
            url: ""
        },
        playerB: {
            name: "",
            elo: "",
            url: ""
        },
    });

    useEffect(() => {
        if (localStorage.getItem('info') === "a91e6e5a877cf8ecc25a8994b1340fa0") {
            localStorage.setItem('info', "70f6e9bbb31edbe653d03434da33806c")
        } else {
            setScore(0)
        }
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
                            elo: -1,
                            url: ""
                        },
                        playerB: {
                            name: "",
                            elo: -1,
                            url: ""
                        },
                    });
                }
            )
    }, []);

    return (
        <div style={{ padding: 0, height: "100vh", width: "100vw", position: "relative" }}>

            <div style={{ height: "100%" }}>
                <Grid style={{ height: "100%" }} container justify="center">
                    <Grid style={{ height: "100%" }} item xs={12} sm={12} md={12}>
                        <CoupleItem style={{ height: "100%" }} score={score} setScore={setScore} rand={rand} setRand={setRand} leftBg={`url(${rand.playerA.url})`} rightBg={`url(${rand.playerB.url})`} />
                    </Grid>
                </Grid>
                <div style={{ position: "absolute", bottom: "0px", color: "white", paddingLeft: "18px" }}>
                    <h1>High Score: {highScore}</h1>
                </div>
                <div style={{ position: "absolute", bottom: "0px", right: "0px", color: "white", paddingRight: "18px" }}>
                    <h1>Current Score: {score}</h1>
                </div>
            </div>
        </div>
    );
}