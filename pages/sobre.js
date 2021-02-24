import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import dynamic from 'next/dynamic'
import { Grid, Paper, Card } from '@material-ui/core';


const DynamicComponentWithNoSSR = dynamic(() => import('../src/AnimatedBackground.js'), {
  ssr: false
})

const titleStyle = {
  color: "#fff",
  fontFamily: 'Fredoka One',
  textAlign: "center"
}

const textStyle = {
  color: "#fff",
  fontFamily: 'Fredoka One',
  textAlign: "justify",
  fontSize: "1.6em"
}

const buttonStyle = {
  textDecoration: "none",
  width: "100%",
  fontSize: "1.2em",
  fontWeight: "800",
  borderRadius: "50px",
  padding: "18px",
  marginBottom:"50px"
}

export default function About() {
  return (
    <Container maxWidth="md">
      <Box my={0} style={{ paddingTop: "32px" }}>
        <Grid container justify="center" spacing={4} alignItems="center">
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={titleStyle} variant="h2" component="h1" gutterBottom>
              quem é o<br />melhorzão?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={titleStyle} variant="h2" component="h1" gutterBottom>
              Como jogar?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={textStyle} variant="h2" component="h1" gutterBottom>
              Duas coisas vão aparecer na tela. Escolha o que a maioria acha melhor. Veja até onde você consegue acertar! Para participar e melhorar o ranking, clique em "votar" e dê o seu voto para as melhores coisas!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={titleStyle} variant="h2" component="h1" gutterBottom>
              Como assim a "melhor" coisa ?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Typography style={textStyle} variant="h2" component="h1" gutterBottom>
              Bem, aí é com você! Se a categoria for "Atores",
              talvez a palavra "melhor" signifique qual destes profissionais faz o melhor trabalho.
              Se for uma categoria como "Animais", talvez a "melhor" coisa seja a mais fofa.
              Já se for uma competição entre armas diferentes, talvez a "melhor" seja a mais letal.
              A interpretação da palavra "melhor" faz parte do jogo!
              </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} style={{ padding: 0 }}>
            <img src="/img/cuteCat.png" style={{ width: "100%", paddingLeft: "15%", paddingRight: "15%" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={titleStyle} variant="h2" component="h1" gutterBottom>
              Quem define os resultados ?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography style={textStyle} variant="h2" component="h1" gutterBottom>
              Os próprios jogadores! Participar dos jogos ( ao clicar no botão "Votar" ), faz com que os votos sejam utilizados para re-calcular a pontuação de cada item.
              A medida que mais jogos são jogados, o ranking é automaticamente atualizado.
              </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button variant="contained" color="primary" component={Link} naked fullWidth style={buttonStyle} href="/">
              Voltar
           </Button>
          </Grid>
        </Grid>
      </Box>
      <DynamicComponentWithNoSSR />
    </Container>
  );
}
