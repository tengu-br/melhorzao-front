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

const useStyles = makeStyles({
  root: {
    maxWidth: 365,
  },
  media: {
    height: 140,
  },
});

export default function CartaoVotar() {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Faça parte
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ajude nos a escolher qual é a melhor coisa do mundo votando em uma de duas opcoes!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button justify="center" variant="contained" color="primary" component={Link} naked href="/votar">
          Clique Aqui Para Votar
        </Button>
      </CardActions>
    </Card>
  );
}
