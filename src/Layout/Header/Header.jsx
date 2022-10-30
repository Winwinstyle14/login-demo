
import React from 'react'
import NavBar from '../../Page/Nav/NavBar'
import NavCart from '../../Page/Nav/NavCart'
import NavMobile from '../../Page/Nav/NavMobile'
import Button from '@mui/material/Button';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Signup from '../../Page/Signup/Signup'
import { Box } from '@mui/system';
import Login from 'Page/Login/Login'
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { logout } from 'components/Auth/userSlice';


const MODE = {
    REGISTER: 'register',
    LOGIN: 'login'
}

const Header = (props) => {
    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.user.current)
    const isLoggedIn = !!loggedInUser.id;
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    // tạo click hien ra menu logout
    const [anchorEl, setAnchorEl] = useState(null)


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickUser = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchorEl(null)
    }
    const handleLogoutClick = () => {
        const action = logout()
        dispatch(action)
    }
    return (
        <div>
            <header className="header">
                <div className="header2">
                    <div className="grid">
                        <div className="header__navbar">
                            <div className="header__navbar_item1">
                                Levents® – Popular Streetwear Brand HỘ KINH DOANH Levents
                            </div>
                            <ul className="header__navbar_list">
                                <li className="header__navbar_item">
                                    Levents® – Popular Streetwear Brand HỘ KINH DOANH Levents
                                </li>
                            </ul>
                            <ul className="header__navbar_list">
                                <li className="header__navbar_item">
                                    134 Trương Định, Hai Bà Trưng, Hà Nội
                                </li>

                                {/* login */}

                                <li className="header__navbar_item">
                                    {!isLoggedIn && (
                                        <button color="inherit" className="DKDN_link" onClick={handleClickOpen}><span className="btn__DKDN">Đăng Ký / Đăng Khập</span>
                                        </button>

                                    )}
                                    {isLoggedIn && (
                                        // <IconButton lineHeight="60px" color="inherit" >
                                        //     <AccountCircle />
                                        // </IconButton>
                                        <IconButton color="inherit" onClick={handleClickUser}>
                                            <AccountCircle />
                                        </IconButton>

                                    )}



                                    <button className="DKDN_link"><span className="btn__DX">Đăng Xuất</span>
                                    </button>

                                </li>
                                <li className="header__navbar_item">
                                    <a href="https://www.facebook.com/haianh.t.99" target="_blank" className="icon_link"><i className="fa-brands fa-facebook-f" /></a>
                                    <a href="https://www.instagram.com/" target="_blank" className="icon_link"><i className="fa-brands fa-instagram" /></a>
                                    <a href="https://twitter.com/?lang=vi" target="_blank" className="icon_link"><i className="fa-brands fa-twitter" /></a>
                                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzGpHHPpFmDcJtdpkzVqTClpRgCW" className="icon_link" target="_blank"><i className="fa-solid fa-envelope" /></a>
                                    <a href="https://www.youtube.com/" className="icon_link" target="_blank"><i className="fa-brands fa-youtube" /></a>
                                </li>
                            </ul>
                            <Dialog
                                disableEscapeKeyDown
                                onBackdropClick
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="form-dialog-title">

                                <DialogContent>
                                    {mode === MODE.REGISTER && (
                                        <>
                                            <Signup closeDialog={handleClose}></Signup>
                                            <Box textAlign="center">
                                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                                    Nếu bạn đã có tài khoản. Đăng nhập tại đây
                                                </Button>
                                            </Box>
                                        </>
                                    )}
                                    {mode === MODE.LOGIN && (
                                        <>
                                            <Login closeDialog={handleClose}></Login>
                                            <Box textAlign="center" >
                                                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                                    Nếu bạn chưa có tài khoản. Đăng ký tại đây
                                                </Button>
                                            </Box>
                                        </>
                                    )}

                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>

                                </DialogActions>
                            </Dialog>
                            {/* menu logout */}
                            <Menu
                                anchorEl={anchorEl}
                                keepMounted
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
                        </div>
                        {/* respon mobile */}
                        <div className="header_with_search">
                            <label htmlFor="nav-mobile-input" className="nav_bar-btn">
                                <i className="fa-solid fa-bars" />
                            </label>
                            <input type="checkbox" hidden name className="nav_input" id="nav-mobile-input" />
                            <label htmlFor="nav-mobile-input" className="nav_overlay" />
                            {/* repon */}
                            <div className="menubar_content_mobile">
                                <label htmlFor="nav-mobile-input" className="nav_mobile_close">
                                    <i className="fa-solid fa-xmark" />
                                </label>
                                <form id="header__search_overlay" className="header__search_overlay">
                                    <input type="text" placeholder="Tìm kiếm..." />
                                    <button className="header_search-btn-overlay" type="submit">
                                        <i className="fa-solid fa-magnifying-glass" />
                                    </button>
                                </form>
                                <NavMobile></NavMobile>
                            </div>
                            {/* repon */}
                            <div className="header_logo">
                                <a href="index.html">
                                    <img src="https://bizweb.dktcdn.net/100/318/614/themes/667160/assets/logo.png?1655706741253" className="header_logo_item header_logo_item_mobile" alt="logo" />
                                </a>
                            </div>
                            <div className="header_search">
                                <form id="header__search_form" className="header__search_form">
                                    <input type="text" placeholder="Tìm kiếm..." />
                                    <button className="header_search-btn" type="submit">
                                        <i className="fa-solid fa-magnifying-glass" />
                                    </button>
                                </form>
                            </div>
                            {/* navCart */}
                            <div className="header_cart">
                                <NavCart></NavCart>
                            </div>
                        </div>
                        <div className="header_menubar">
                            <div className="border_top" />
                            {/* navbar */}
                            <NavBar></NavBar>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header