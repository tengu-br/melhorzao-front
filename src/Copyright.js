import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <div style={{ position: "absolute", bottom: "18px",  marginLeft: 'auto', marginRight: 'auto', right: "0px", left: "0px", }}>
      <Typography variant="body2" style={{ color: "#fff" }} align="center">
        {'criado por '}
        <MuiLink color="inherit" href="https://vitorcosta.me/">
          vitor costa
    </MuiLink>
        {' '}
        {new Date().getFullYear()}
        {' .'}
      </Typography>
    </div>
  );
}
