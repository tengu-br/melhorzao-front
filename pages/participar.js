import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Copyright from '../src/Copyright';
import { Grid, Paper, Card, Button } from '@material-ui/core';
import CoupleVote from '../src/CoupleVote'
import { useRouter } from 'next/router'
import Link from '../src/Link'

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

export default function Participar() {

    const router = useRouter()
    const [plays, setPlays] = useState(0)
    const [majority, setMajority] = useState(0)

    useEffect(() => {
        setPlays(localStorage.getItem('plays'))
        setMajority(localStorage.getItem('majority'))
    }, []);

    useEffect(() => {
        localStorage.setItem('plays', plays);
        localStorage.setItem('majority', majority);
    }, [plays]);

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
        fetch(`${process.env.NEXT_PUBLIC_API_ADDR}/coupleRandom`, requestOptions)
            .then(response => response.json())
            .then(
                (result) => {
                    setRand({ ...result });
                },
                (error) => {
                    // console.log(error)
                    setRand({
                        collection: "",
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

    const buttonDiv = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        marginTop: "18px",
    }

    const linkStyle = {
        textDecoration: "none",
        width: "100%",
        marginLeft: "8px",
        marginRight: "8px",
    }

    const buttonStyle = {
        textDecoration: "none",
        width: "100%",
        fontSize: "1.2em",
        fontWeight: "800",
        borderRadius: "50px",
        padding: "18px",
    }

    return (
        <div style={{ padding: 0, height: "100vh", width: "100vw", position: "relative" }}>
            <div style={{ height: "100%" }}>
                <Grid style={{ height: "100%" }} container justify="center">
                    <Grid style={{ height: "100%" }} item xs={12} sm={12} md={12}>
                        <CoupleVote style={{ height: "100%" }}
                            plays={plays} setPlays={setPlays} rand={rand} setRand={setRand}
                            majority={majority} setMajority={setMajority}
                            leftBg={`url(${rand.playerA.url})`} rightBg={`url(${rand.playerB.url})`} />
                    </Grid>
                    <div style={{ position: "absolute", top: "30%", color: "white", paddingLeft: "18px" }}>
                        <h1>Votos: {plays}</h1>
                        <div style={buttonDiv}>
                            <Link href="/results" style={linkStyle}>
                                <Button variant="contained" fullWidth style={buttonStyle} >Finalizar</Button>
                            </Link>
                        </div>
                        <div style={buttonDiv}>
                            <Button variant="contained" fullWidth style={buttonStyle} onClick={(e) => { location = location }} >Pular</Button>
                        </div>
                    </div>
                </Grid>
            </div>
        </div>
    );
}