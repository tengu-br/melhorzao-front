import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '../src/Link'
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router'

const useStyles = makeStyles({
  root: {
    maxWidth: 365,
  },
  media: {
    height: 140,
  },
});

export default function CartaoLista({ image, title, header, chamada }) {
  const classes = useStyles()
  const router = useRouter()

  function handleClick(params) {
    router.push('/votar')
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
          <Typography style={{ color: "#fff", fontFamily: "Roboto", fontSize:"1.2em" }} variant="body2" component="p">
            {chamada}
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