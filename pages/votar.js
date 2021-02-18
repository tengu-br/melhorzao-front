import React, { useState } from 'react';
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
import CoupleItem from '../src/CoupleItem'
import Bounce from 'react-reveal/Bounce';
import RightWrong from '../src/RightWrong'

export default function Votar() {

    const [show, setShow] = useState(false)
    const [mode, setMode] = useState(false)

    return (
        <Container maxWidth="md">
            <Bounce top when={show}>
                <RightWrong mode={mode} />
            </Bounce>
            <Box my={4}>
                <Grid container justify="center" spacing={4}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="h2" component="h1" gutterBottom>
                            O que é melhor?
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <CoupleItem setShow={setShow} setMode={setMode} mode={mode} show={show} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Copyright />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
