import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import StoreIcon from '@material-ui/icons/Store';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { logout } from 'features/Auth/userSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  },
  iconButton: {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
      color: theme.palette.grey[500],
      zIndex: 1
  }
}));

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register'
}

export default function Header(props) {
    // STATES
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!loggedInUser.id;

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = React.useState(null);

    // FUNCTIONS
    const handleClickOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const handleOpenMenu = e => setAnchorEl(e.currentTarget);

    const handleCloseMenu = () => setAnchorEl(null);

    const handleLogoutClick = () => {
        dispatch(logout());
        handleCloseMenu();
    }

    // STYLES
    const classes = useStyles();

    return (
        <div className={props.classname}>
            <AppBar position="static">
                <Toolbar>
                    <StoreIcon className={classes.menuButton}/>
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to="/products">EZ Shop</Link>
                    </Typography>

                    <NavLink className={classes.link} to="/todos" activeClassName="active-page">
                        <Button color="inherit">Todos</Button>
                    </NavLink>
                    <NavLink className={classes.link} to="/albums" activeClassName="active">
                        <Button color="inherit">Albums</Button>
                    </NavLink>

                    { !isLoggedIn ? <Button color="inherit" onClick={handleClickOpen}>Login</Button> : <IconButton color="inherit" onClick={handleOpenMenu}><AccountCircle/></IconButton> }
                </Toolbar>
            </AppBar>
            <Menu
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu} 
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>

            <Dialog 
                open={open} 
                onClose={handleClose} 
                aria-labelledby="form-dialog-title"
                disableBackdropClick
                disableEscapeKeyDown
            >
                <IconButton className={classes.iconButton} onClick={handleClose}>
                    <Close />
                </IconButton>
                <DialogContent>
                    {
                        mode === MODE.REGISTER && (
                            <>
                                <Register closeDialog={handleClose}/>
                                <Box textAlign="center">
                                    <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                        Already have an account. Login here
                                    </Button>
                                </Box>
                            </>
                        )
                    }
                    {
                        mode === MODE.LOGIN && (
                            <>
                                <Login closeDialog={handleClose}/>
                                <Box textAlign="center">
                                    <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                        Don't have an account. Register here
                                    </Button>
                                </Box>
                            </>
                        )
                    }
                </DialogContent>
            </Dialog>
        </div>
    );
}
