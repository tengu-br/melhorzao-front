import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Copyright from '../src/Copyright';
import { Grid, Paper, Card } from '@material-ui/core';
import CoupleItem from '../src/CoupleItem'

export default function Votar() {


    return (
        <div style={{ padding: 0, height: "100vh", width: "100vw", position: "relative" }}>

            <div style={{ height: "100%" }}>
                <Grid style={{ height: "100%" }} container justify="center">
                    <Grid style={{ height: "100%" }} item xs={12} sm={12} md={12}>
                        <CoupleItem style={{ height: "100%" }} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
