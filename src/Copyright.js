import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'criado por '}
      <MuiLink color="inherit" href="https://vitorcosta.me/">
        vitor costa
      </MuiLink>{' e dan swano em '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
