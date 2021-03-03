import React, { useState, useEffect } from 'react';
import { Grid, Paper, Card, Button } from '@material-ui/core';
import Link from '../src/Link'
import Bounce from 'react-reveal/Bounce';
import RightWrong from '../src/RightWrong'
import { useRouter } from 'next/router'

function CoupleItem({ leftBg, rightBg, rand, setRand, score, setScore }) {

    const router = useRouter()
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
        setShow(!show)

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

        fetch(`${process.env.NEXT_PUBLIC_API_ADDR}/perceivedMatchup`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "collection": router.query.cat, "winner": nameWinner, "loser": nameLoser }),
            redirect: 'follow'
        })

    }

    function userWon() {
        localStorage.setItem('info', "a91e6e5a877cf8ecc25a8994b1340fa0")
        setScore(Number(score) + 1)
        setMode(true)
        setTimeout(() => {
            setShow(false)
            setMode(false)
            router.push({
                pathname: '/votar',
                query: { cat: router.query.cat },
            })
        }, 2000);
    }

    function userLost() {
        localStorage.setItem('info', "70f6e9bbb31edbe653d03434da33806c")
        localStorage.setItem('finalMatchup', "col;rand1;rand2")
        localStorage.setItem('finalScore', score)
        setMode(false)
        setScore(0)
        setTimeout(() => {
            router.push({
                pathname: '/end'
            })
            setShow(false)
        }, 2000);
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
                            <h1 style={playerStyle}>{rand.playerA.name}</h1>
                            {!show &&
                                <Button style={buttonStyle} variant="contained" color="secondary" onClick={(e) => handleClick(e, true)}>Isso é melhor</Button>
                            }
                        </div>
                    </div>
                </Grid>
                <Grid style={{ height: "100%", padding: 0 }} item xs={6}>
                    <div style={Object.assign({}, bgStyle, { backgroundImage: rightBg })} />
                    <div style={infoStyle}>
                        <div style={innerStyle}>
                            <h1 style={playerStyle}>{rand.playerB.name}</h1>
                            {!show &&
                                <Button style={buttonStyle} variant="contained" color="secondary" onClick={(e) => handleClick(e, false)}>Isso é melhor</Button>
                            }
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default CoupleItem;