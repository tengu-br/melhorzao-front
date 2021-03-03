import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { Grid, Paper, Card } from '@material-ui/core';
import CartaoLista from '../src/CartaoLista';
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../src/AnimatedBackground.js'), {
    ssr: false
})

export default function Index() {

    const [categorias, setCategorias] = useState([{ name: "Loading" }, { name: "Loading" }, { name: "Loading" }, { name: "Loading" }, { name: "Loading" }, { name: "Loading" }, { name: "Loading" }, { name: "Loading" }, { name: "Loading" }, { name: "Loading" }, { name: "Loading" }])

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_ADDR}/listaCollections`, {
            method: 'GET',
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(
                (result) => {
                    setCategorias(result.value);
                },
                (error) => {
                    // console.log(error)
                    setCategorias([]);
                }
            )
    }, []);

    const titleStyle = {
        marginTop: "18px",
        color: "#fff",
        fontFamily: 'Fredoka One'
    }

    return (
        <Container maxWidth="md">
            <Grid container justify="center" spacing={4} style={{ marginTop: "0px", paddingTop: "32px", marginBottom: "0px", paddingBottom: "32px" }}>
                {categorias.map((categoria, mapIndex) => {
                    return (
                        <Grid item xs={12} sm={6} md={6} lg={6} key={mapIndex}>
                            <CartaoLista
                                image={categoria.img}
                                title={categoria.name}
                                header={categoria.name}
                                chamada={categoria.name}
                                query={categoria.colName}
                            />
                        </Grid>
                    )
                })}
            </Grid>
            <DynamicComponentWithNoSSR />
        </Container>
    );
}
