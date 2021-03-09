import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router'

const useStyles = makeStyles({
  root: {
    textAlign: "center"
  },
  media: {
    height: 190,
  },
});

export default function CartaoLista({ image, title, header, chamada, query }) {
  const classes = useStyles()
  const router = useRouter()

  function handleClick(params) {
    router.push({
      pathname: '/votar',
      query: { cat: query },
    })
  }

  return (
    <Card className={classes.root} >
      <CardActionArea onClick={(e) => handleClick(e)}>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent style={{ backgroundColor: "#290D40" }}>
          <Typography style={{ color: "#fff", fontFamily: "Fredoka One" }} gutterBottom variant="h5" component="h2">
            {header}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card >
  );
}

    // <CardActions>
    //   <Button justify="center" variant="contained" color="primary" component={Link} naked href="/votar">
    //     Clique Aqui Para Votar
    //   </Button>
    // </CardActions>