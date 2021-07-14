import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo.png'
import useStyle from './style'
import { Link, useLocation } from 'react-router-dom'
const Navbar = ({ totalItems }) => {
    const classes = useStyle()
    const location = useLocation();


    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='Commerce.js' heigth='25px' width='25px' className={classes.image} />
                        Commerce.js

                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' &&(
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label='show cart items' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
