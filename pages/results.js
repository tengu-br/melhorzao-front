import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link'
import Button from '@material-ui/core/Button';
import Copyright from '../src/Copyright';
import { Grid, Paper, Card } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';

export default function Index() {

    const rand = Math.floor(Math.random() * (5) + 1)

    const titleStyle = {
        marginTop: "18px",
        color: "#fff",
        fontFamily: 'Roboto',
        textAlign: "center",
        fontSize: "3em",
        fontWeight:"500"
    }

    const bgStyle = {
        zIndex: -1,
        position: "absolute",
        top: 0,
        left: 0,
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "brightness(40%)",
        color: "white",
        height: "100%",
        width: "100%",
        backgroundImage: `url("https://melhorzao-bucket.s3-sa-east-1.amazonaws.com/images/good-${rand}.gif")`
    };

    const bgStyleMatchup = {
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "brightness(25%)",
        color: "white",
        height: "100%",
    };

    const buttonDiv = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
    }

    const buttonStyle = {
        textDecoration: "none",
        width: "100%",
        fontSize: "1.2em",
        fontWeight: "800",
        borderRadius: "50px",
        padding: "18px",
    }

    const linkStyle = {
        textDecoration: "none",
        width: "100%",
        marginLeft: "8px",
        marginRight: "8px",
    }

    const paperStyle = {
        position: "absolute",
        left: "10%",
        top: "10%",
        width: "80%",
        height: "80%"
    }

    const [plays, setPlays] = useState(0)
    const [majority, setMajority] = useState(0)

    useEffect(() => {
        setPlays(localStorage.getItem('plays'))
        setMajority(localStorage.getItem('majority'))
    }, []);


    return (
        <Container maxWidth="md">
            <div style={bgStyle} />
            <Box my={4}>
                <Grid container justify="center" spacing={4}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography style={titleStyle} variant="h2" component="h1" gutterBottom>
                            Obrigado por votar!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography style={titleStyle} variant="h2" component="h1" gutterBottom>
                            Você fez {plays} {plays == "1" ? "voto" : "votos"} e o resto da população concordou com você {Math.round(100 * majority / plays)}% das vezes!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div style={buttonDiv}>
                            <Link href="/participar" style={linkStyle}>
                                <Button variant="contained" color="secondary" fullWidth style={buttonStyle} >Votar Novamente</Button>
                            </Link>
                            <Link href="/" style={linkStyle}>
                                <Button variant="contained" color="secondary" fullWidth style={buttonStyle} >Home</Button>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Copyright />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
