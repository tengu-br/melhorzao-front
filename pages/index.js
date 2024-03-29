import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link'
import Button from '@material-ui/core/Button';
import Copyright from '../src/Copyright';
import { Grid, Paper, Card, Tooltip } from '@material-ui/core';

export default function Index() {

  const titleStyle = {
    marginTop: "18px",
    color: "#fff",
    fontFamily: 'Fredoka One',
    textAlign: "center"
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
    backgroundImage: "url(/img/igor-karimov-YuipfPtOH1k-unsplash.jpg)"
  };

  const buttonDiv = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    marginTop: "18px",
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

  useEffect(() => {
    localStorage.setItem('plays', 0)
    localStorage.setItem('majority', 0)
    localStorage.setItem('score', 0)
  }, []);

  return (
    <Container maxWidth="md">
      <div style={bgStyle} />
      <Box my={4}>
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={titleStyle} variant="h2" component="h1" gutterBottom>
              quem é o<br />
              melhorzão?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9} md={6}>
            <div style={buttonDiv}>
              <Link href="/lista" style={linkStyle}>
                <Tooltip title="Advinhe o que outros jogadores votaram como melhor!" placement="top">
                  <Button alt="asdsad" variant="contained" color="secondary" fullWidth style={buttonStyle} >Jogar</Button>
                </Tooltip>
              </Link>
              <Link href="/sobre" style={linkStyle}>
                <Tooltip title="? ? ?" placement="top">
                  <Button variant="contained" color="secondary" fullWidth style={buttonStyle}>Como Assim ?</Button>
                </Tooltip>
              </Link>
            </div>
            <div style={buttonDiv}>
              <Link href="/participar" style={linkStyle}>
                <Tooltip title="Participe e melhore o ranking!" placement="bottom">
                  <Button variant="contained" color="secondary" fullWidth style={buttonStyle} >Votar</Button>
                </Tooltip>
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
