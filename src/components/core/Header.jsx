import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "@/../public/images/core/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Service", path: "/service" },
  { name: "Insights", path: "/insights" },
  { name: "Careers", path: "careers" },
  { name: "Contact Us", path: "/contacts" },
  { name: "Press Release", path: "/press-release" },
];

export default function Header() {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
            className="desktop-header"
          >
            <Image src={logo} alt="" />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  className={router.pathname === page.path ? "active" : ""}
                >
                  <Link href={page.path}>{page.name}</Link>
                </Button>
              ))}
            </Box>
          </Box>

          {/* Mobile */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            className="mobile-header"
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link
                    href={page.path}
                    className={router.pathname === page.path ? "active" : null}
                  >
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
