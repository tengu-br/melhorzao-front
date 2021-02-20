import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link'
import Button from '@material-ui/core/Button';
import Copyright from '../src/Copyright';
import { Grid, Paper, Card } from '@material-ui/core';
import CartaoVotar from '../src/CartaoVotar';
import CartaoResultados from '../src/CartaoResultados';

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h2" component="h1" gutterBottom>
              Qual é a melhor coisa do mundo?<br />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <CartaoVotar />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <CartaoResultados />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
