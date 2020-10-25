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

export default function CartaoResultados() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Veja os resultados
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Veja quem esta ganhando no momento! Ou busque a posicao da sua 'coisa' predileta.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button justify="center" variant="contained" color="primary" component={Link} naked href="/resultados">
          Clique Aqui Para Ver
    </Button>
      </CardActions>
    </Card>
  );
}
