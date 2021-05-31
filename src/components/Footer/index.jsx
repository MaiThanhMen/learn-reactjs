import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" to="/">Your Website</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer({ classname }) {
  return (
    <footer className={classname}>
        <Container maxWidth="sm">
            <Typography variant="body1">My sticky footer can be found here.</Typography>
            <Copyright />
        </Container>
    </footer>
  );
}