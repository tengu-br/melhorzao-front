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

    const errouMessage = [
        "ERRRROOUUU ! ! !",
        "Quase... Só que não!",
        "Você está na minoria nessa escolha...",
        "Mais sorte na próxima vez!",
        "O povo brasileiro discorda de você. Perdeu!",
        "Na próxima já sabe em quem votar!",
        "Foi um bom chute.",
        "Desculpe, mas sua opinião está ERRADA"
    ]

    const rand = Math.floor(Math.random() * (errouMessage.length))

    const randBg = Math.floor(Math.random() * (5) + 1)

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
        backgroundImage: `url("https://melhorzao-bucket.s3-sa-east-1.amazonaws.com/images/bad-${randBg}.gif")`
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

    const greaterLesserStyle = {
        position: "absolute",
        right: "0px",
        left: "0px",
        top: "40%",
        marginLeft: "auto",
        marginRight: "auto",
        width: "10%"
    }

    const explanationStyle = {
        position: "absolute",
        top: "10%",
        left: "10%",
        right: "10%",
    }

    const explanationTextStyle = {
        marginTop: "32px",
        marginBottom: "42px",
        color: "#fff",
        fontFamily: 'Fredoka One',
        textAlign: "center",
        fontSize: "4em"
    }

    const [open, setOpen] = useState(false);
    const [score, setScore] = useState(0)

    useEffect(() => {
        setScore(localStorage.getItem('finalScore'))
    }, []);

    const handleOpen = (e) => {
        e.preventDefault
        // fetch das infos do matchup
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const modalBody = (
        <Paper style={paperStyle}>
            <Grid style={{ height: "100%", padding: 0 }} container justify="center">
                <Grid style={{ height: "100%", padding: 0 }} item xs={6} >
                    <div style={Object.assign({}, bgStyleMatchup, { backgroundImage: `url(http://api.higherlowergame.com/_client/images/general/the-diary-of-anne-frank.jpg)` })} />

                </Grid>
                <Grid style={{ height: "100%", padding: 0 }} item xs={6}>
                    <div style={Object.assign({}, bgStyleMatchup, { backgroundImage: `url(http://api.higherlowergame.com/_client/images/general/water-polo.jpg)` })} />

                </Grid>
            </Grid>
            <div style={greaterLesserStyle}>
                <img draggable={false} style={{ width: "100%", filter: "hue-rotate(250deg) brightness(30%)" }} src="/img/greater.svg" />
            </div>
            <div style={explanationStyle}>
                <Typography style={explanationTextStyle} variant="h2" component="h1">
                    Em construção
                </Typography>
            </div>
        </Paper>
    );

    return (
        <Container maxWidth="md">
            <div style={bgStyle} />
            <Box my={4}>
                <Grid container justify="center" spacing={4}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography style={titleStyle} variant="h2" component="h1" gutterBottom>
                            {errouMessage[rand]}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography style={titleStyle} variant="h2" component="h1" gutterBottom>
                            Você fez <br /> {score} <br /> {score == "1" ? "ponto" : "pontos"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div style={buttonDiv}>
                            <Link href="/lista" style={linkStyle}>
                                <Button variant="contained" color="secondary" fullWidth style={buttonStyle} >Jogar de Novo</Button>
                            </Link>
                            <Link href="/" style={linkStyle}>
                                <Button variant="contained" color="secondary" fullWidth style={buttonStyle} >Home</Button>
                            </Link>
                            <Modal
                                open={open}
                                onClose={handleClose}
                            >
                                {modalBody}
                            </Modal>
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
// <Button variant="contained" color="secondary" fullWidth style={buttonStyle} onClick={handleOpen}>Como eu perdi?!</Button>