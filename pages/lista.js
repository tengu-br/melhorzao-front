import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link'
import Button from '@material-ui/core/Button';
import Copyright from '../src/Copyright';
import { Grid, Paper, Card } from '@material-ui/core';
import CartaoLista from '../src/CartaoLista';
import CartaoResultados from '../src/CartaoResultados';
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../src/AnimatedBackground.js'), {
    ssr: false
})

export default function Index() {

    const titleStyle = {
        marginTop: "18px",
        color: "#fff",
        fontFamily: 'Fredoka One'
    }

    const categorias = [
        {
            image: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
            title: "Contemplative Reptile",
            header: "Animais",
            chamada: "Os humanos podem ter dominado o mundo... Mas que animal domina o coração do povo?"
        },
        {
            image: "https://placeimg.com/700/400/arch",
            title: "Prédios",
            header: "Arquitetura",
            chamada: "Qual será o povo que desenvolveu a melhor arquitetura... De acordo com vocês!"
        },
        {
            image: "https://placeimg.com/700/400/tech",
            title: "Tecnologia",
            header: "Tecnologia",
            chamada: "A tecnologia nos ajuda a desenolver novas coisas, mas qual delas nos ajuda mais que as outras?"
        },
        {
            image: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
            title: "Contemplative Reptile",
            header: "Animais",
            chamada: "Os humanos podem ter dominado o mundo... Mas que animal domina o coração do povo?"
        },
        {
            image: "https://placeimg.com/700/400/arch",
            title: "Prédios",
            header: "Arquitetura",
            chamada: "Qual será o povo que desenvolveu a melhor arquitetura... De acordo com vocês!"
        },
        {
            image: "https://placeimg.com/700/400/tech",
            title: "Tecnologia",
            header: "Tecnologia",
            chamada: "A tecnologia nos ajuda a desenolver novas coisas, mas qual delas nos ajuda mais que as outras?"
        },
        {
            image: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
            title: "Contemplative Reptile",
            header: "Animais",
            chamada: "Os humanos podem ter dominado o mundo... Mas que animal domina o coração do povo?"
        },
        {
            image: "https://placeimg.com/700/400/arch",
            title: "Prédios",
            header: "Arquitetura",
            chamada: "Qual será o povo que desenvolveu a melhor arquitetura... De acordo com vocês!"
        },
        {
            image: "https://placeimg.com/700/400/tech",
            title: "Tecnologia",
            header: "Tecnologia",
            chamada: "A tecnologia nos ajuda a desenolver novas coisas, mas qual delas nos ajuda mais que as outras?"
        },
    ]

    // Cabeçalho
    // <Grid item xs={12} sm={12} md={12}>
    //     <Typography style={titleStyle} variant="h2" component="h1" gutterBottom>
    //         Escolha uma categoria!<br />
    //     </Typography>
    // </Grid>

    return (
        <Container maxWidth="md">
            <Grid container justify="center" spacing={4} style={{ marginTop: "0px", paddingTop: "32px", marginBottom: "0px", paddingBottom: "32px" }}>
                {categorias.map((categoria, mapIndex) => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={4} key={mapIndex}>
                            <CartaoLista
                                image={categoria.image}
                                title={categoria.title}
                                header={categoria.header}
                                chamada={categoria.chamada}
                            />
                        </Grid>
                    )
                })}
            </Grid>
            <DynamicComponentWithNoSSR />
        </Container>
    );
}
