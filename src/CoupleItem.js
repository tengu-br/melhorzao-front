import React, { useState, useEffect } from 'react';
import { Grid, Paper, Card, Button } from '@material-ui/core';

import Bounce from 'react-reveal/Bounce';
import RightWrong from '../src/RightWrong'



function CoupleItem({ leftBg, rightBg, rand, setRand, score, setScore }) {

    const [show, setShow] = useState(false)
    const [mode, setMode] = useState(false)

    const bounceDiv = {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        right: "0px",
        left: "0px",
        textAlign: "center",
        zIndex: 100,
        width: "80vw",
        maxWidth: "320px",
        top: "15vh"
    };

    const bgStyle = {
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "brightness(50%)",
        color: "white",
        height: "100%",
    };

    const infoStyle = {
        color: "white",
        height: "100%",
        width: "50%",
        position: "absolute",
        top: "0",
        display: "flex",
    };

    const innerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 'auto',
        marginRight: 'auto',
        right: "0px",
        left: "0px",
    };


    function handleClick(e, param) {
        e.preventDefault()
        setShow(!show)

        // PARAM TRUE = A, FALSE = B
        var nameWinner, eloWinner, nameLoser, eloLoser

        if (param) {
            nameWinner = rand.playerA.name
            eloWinner = rand.playerA.elo
            nameLoser = rand.playerB.name
            eloLoser = rand.playerB.elo
            if (rand.playerA.elo < rand.playerB.elo) {
                userLost()
            } else {
                userWon()
            }
        } else {
            nameWinner = rand.playerB.name
            eloWinner = rand.playerB.elo
            nameLoser = rand.playerA.name
            eloLoser = rand.playerA.elo
            if (rand.playerB.elo < rand.playerA.elo) {
                userLost()
            } else {
                userWon()
            }
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
                    // console.log(result)
                    // refresh page
                    // location = location
                },
                (error) => {
                    // console.log(error)
                }
            )

    }

    function userWon() {
        localStorage.setItem('info', "a91e6e5a877cf8ecc25a8994b1340fa0")
        setScore(Number(score) + 1)
        setMode(true)
        setTimeout(() => {
            location = location
        }, 2000);
    }

    function userLost() {
        localStorage.setItem('info', "70f6e9bbb31edbe653d03434da33806c")
        setMode(false)
        setScore(0)
    }

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <div style={bounceDiv}>
                <Bounce top when={show}>
                    <RightWrong mode={mode} />
                </Bounce>
            </div>
            <Grid style={{ height: "100%", padding: 0 }} container justify="center">
                <Grid style={{ height: "100%", padding: 0 }} item xs={6} >
                    <div style={Object.assign({}, bgStyle, { backgroundImage: leftBg })} />
                    <div style={infoStyle}>
                        <div style={innerStyle}>
                            <h1 style={{ filter: "none", margin: 0 }}>{rand.playerA.name}</h1>
                            <h2>Elo: {rand.playerA.elo}</h2>
                            {!show &&
                                <Button style={{ zIndex: 100 }} variant="contained" color="primary" onClick={(e) => handleClick(e, true)}>Isso é melhor</Button>
                            }
                        </div>
                    </div>
                </Grid>
                <Grid style={{ height: "100%", padding: 0 }} item xs={6}>
                    <div style={Object.assign({}, bgStyle, { backgroundImage: rightBg })} />
                    <div style={infoStyle}>
                        <div style={innerStyle}>
                            <h1 style={{ margin: 0 }}>{rand.playerB.name}</h1>
                            <h2>Elo: {rand.playerB.elo}</h2>
                            {!show &&
                                <Button style={{ zIndex: 100 }} variant="contained" color="primary" onClick={(e) => handleClick(e, false)}>Isso é melhor</Button>
                            }
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default CoupleItem;