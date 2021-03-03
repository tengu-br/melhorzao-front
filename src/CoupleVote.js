import React, { useState, useEffect } from 'react';
import { Grid, Paper, Card, Button } from '@material-ui/core';
import { useRouter } from 'next/router'

function CoupleVote({ leftBg, rightBg, rand, setRand, plays, setPlays, majority, setMajority }) {

    const router = useRouter()

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

    const buttonStyle = {
        width: "90%",
        minWidth: "250px",
        maxWidth: "350px",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "1.2em",
        fontWeight: "800",
        borderRadius: "50px",
        padding: "18px",
        zIndex: 100,
    }

    const playerStyle = {
        fontSize: "calc(2.5vw + 34px)"
    }


    function handleClick(e, param) {
        e.preventDefault()

        // PARAM TRUE = A, FALSE = B
        var nameWinner, nameLoser

        if (param) {
            nameWinner = rand.playerA.name
            nameLoser = rand.playerB.name
            if (rand.playerA.elo < rand.playerB.elo) {
                userLost()
            } else {
                userWon()
            }
        } else {
            nameWinner = rand.playerB.name
            nameLoser = rand.playerA.name
            if (rand.playerB.elo < rand.playerA.elo) {
                userLost()
            } else {
                userWon()
            }
        }

        fetch(`${process.env.NEXT_PUBLIC_API_ADDR}/matchup`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "collection": rand.collection, "winner": nameWinner, "loser": nameLoser }),
            redirect: 'follow'
        })

    }

    function userWon() {
        localStorage.setItem('info', "a91e6e5a877cf8ecc25a8994b1340fa0")
        setPlays(Number(plays) + 1)
        setMajority(Number(majority) + 1)
        location = location
    }

    function userLost() {
        localStorage.setItem('info', "70f6e9bbb31edbe653d03434da33806c")
        setPlays(Number(plays) + 1)
        location = location
    }

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <Grid style={{ height: "100%", padding: 0 }} container justify="center">
                <Grid style={{ height: "100%", padding: 0 }} item xs={6} >
                    <div style={Object.assign({}, bgStyle, { backgroundImage: leftBg })} />
                    <div style={infoStyle}>
                        <div style={innerStyle}>
                            <h1 style={playerStyle}>{rand.playerA.name}</h1>
                            <Button style={buttonStyle} variant="contained" color="secondary" onClick={(e) => handleClick(e, true)}>Isso é melhor</Button>
                        </div>
                    </div>
                </Grid>
                <Grid style={{ height: "100%", padding: 0 }} item xs={6}>
                    <div style={Object.assign({}, bgStyle, { backgroundImage: rightBg })} />
                    <div style={infoStyle}>
                        <div style={innerStyle}>
                            <h1 style={playerStyle}>{rand.playerB.name}</h1>
                            <Button style={buttonStyle} variant="contained" color="secondary" onClick={(e) => handleClick(e, false)}>Isso é melhor</Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default CoupleVote;