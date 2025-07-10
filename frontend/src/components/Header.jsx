import React, { useLayoutEffect, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';


import { gsap } from "gsap";

const user = JSON.parse(localStorage.getItem('user'));


const Header = () => {

    const [navMenuAnchor, setNavMenuAnchor] = React.useState(null);
    const [userMenuAnchor, setUserMenuAnchor] = React.useState(null);

    const handleOpenNavMenu = (event) => setNavMenuAnchor(event.currentTarget);
    const handleCloseNavMenu = () => setNavMenuAnchor(null);
    const handleOpenUserMenu = (event) => setUserMenuAnchor(event.currentTarget);
    const handleCloseUserMenu = () => setUserMenuAnchor(null);

    const navItems = useRef([]);
    const userMenuItems = useRef([]);


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const timeLine = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.out' } });

            timeLine.from(navItems.current, {
                opacity: 0,
                y: 30,
                stagger: 0.2,
            });
        });
        return () => ctx.revert(); // Clean up on unmount
    }, []);

    useLayoutEffect(() => {
        if (!userMenuAnchor) return;

        // Delay to ensure MUI <MenuItem> is rendered into the DOM
        const id = setTimeout(() => {
            const ctx = gsap.context(() => {
                const timeLine = gsap.timeline({ defaults: { duration: 0.4, ease: 'power2.out' } });
                timeLine.from(userMenuItems.current, {
                    opacity: 0,
                    x: 40,
                    stagger: 0.15,
                });
            });

            // Clean up context
            return () => ctx.revert();
        }, 50); // 50–100ms usually works well

        return () => clearTimeout(id); // clean up timeout if menu closes too fast
    }, [userMenuAnchor]);
      


    const pages = [
        { label: 'Home', path: '/' },
        { label: 'Books', path: '/PustakMandi/books' },
        { label: 'About', path: '/PustakMandi/about' },
        { label: 'Contact', path: '/PustakMandi/contact' },

        ...(user
            ? [{ label: 'Profile', path: '/PustakMandi/profile' }]
            : [{ label: 'Login/Register', path: '/PustakMandi/login' }]
        ),

        // Admin-only routes
        ...(user?.role === 'admin'
            ? [
                { label: 'Add Book', path: '/PustakMandi/addBook' },
                { label: 'Delete Book', path: '/PustakMandi/deleteBook' },
            ]
            : [])

    ];

    // User settings
    const settings = ['Profile', 'Account', 'Logout'];

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#1B1212', color: '#fefefe' }}>
            <Toolbar>
                {/* Logo */}
                <img
                    src="/BookMarketLogoDesign.png"
                    alt="logo"
                    style={{ height: 40, width: 40, borderRadius: '50%', marginRight: 16 }}
                />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    PustakMandi
                </Typography>

                {/* Mobile Navigation */}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton color="inherit" onClick={handleOpenNavMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={navMenuAnchor}
                        open={Boolean(navMenuAnchor)}
                        onClose={handleCloseNavMenu}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                                <Link
                                    to={page.path}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    {page.label}
                                </Link>
                            </MenuItem>
                        ))}

                    </Menu>
                </Box>

                {/* Desktop Navigation */}


                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                    {pages.map((page, index) => (
                        <Button
                            key={page.path}
                            color="inherit"
                            component={Link}
                            to={page.path}
                            ref={(el) => (navItems.current[index] = el)}
                        >
                            {page.label}
                        </Button>
                    ))}
                </Box>


                {/* User Settings */}
                <Box sx={{ ml: 2 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="User" src="/BookMarketLogoDesign.png" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={userMenuAnchor}
                        open={Boolean(userMenuAnchor)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting, index) => (
                            <MenuItem
                                key={setting}
                                ref={(el) => (userMenuItems.current[index] = el)}
                                onClick={() => {
                                    handleCloseUserMenu();

                                    if (setting === 'Profile') {
                                        window.location.href = '/PustakMandi/profile';
                                    } else if (setting === 'Logout') {
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('user');
                                        alert('Logged out successfully!');
                                        window.location.href = '/PustakMandi/login';
                                    } else if (setting === 'Account') {
                                        alert('Account settings coming soon!');
                                    }
                                }}
                            >
                                {setting}
                            </MenuItem>
                        ))}

                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default Header;