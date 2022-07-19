import * as React from 'react';

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

import { useNavigate } from 'react-router-dom';

const pages = ["About", "Blog", "Contact"];

const MainMenu = (props) => {
	const navigate = useNavigate();
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	
	return (
		<React.Fragment>
			<AppBar position="fixed"
				sx={{
					backgroundImage: `url(./static/images/header_background.png)`,
				}}
			>
				<Toolbar disableGutters variant='dense'>
					<img
						src={"./static/images/logo.png"}
						style={{ width: "32x", height: "32px", padding: "10px", cursor: "pointer" }}
						alt="logo"
						onClick={() => {
							navigate('/');
						}}
					/>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={() => {
									handleCloseNavMenu();
									navigate('/' + page);
								}}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, paddingLeft: "10px" }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={() => {
									handleCloseNavMenu();
									navigate('/' + page);
								}}
								sx={{ my: 2, color: "brown", display: "block" }}
							>
								{page}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Toolbar/>
		</React.Fragment>
	);
};

export default MainMenu;
