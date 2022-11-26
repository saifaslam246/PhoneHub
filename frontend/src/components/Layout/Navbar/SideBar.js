import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { HashLink as Link } from "react-router-hash-link";
import { IconButton, MenuItem, Avatar, Button, Menu } from "@mui/material";
import { useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import GroupsIcon from "@mui/icons-material/Groups";
import CollectionsIcon from "@mui/icons-material/Collections";
import ListIcon from "@mui/icons-material/List";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const ButtonWrapper = styled(Button)(({ theme, bordercolor, hovercolor }) => ({
  marginLeft: 245,
  [theme.breakpoints.down(281)]: {
    marginLeft: 150,
  },
  [theme.breakpoints.up(539)]: {
    marginLeft: 400,
  },
  [theme.breakpoints.up(767)]: {
    marginLeft: 200,
  },
  [theme.breakpoints.up(820)]: {
    marginLeft: 250,
  },
  [theme.breakpoints.up(1000)]: {
    marginLeft: 400,
  },
  [theme.breakpoints.up(1279)]: {
    marginLeft: 700,
  },
}));

const IconButtonWrapper = styled(IconButton)(
  ({ theme, bordercolor, hovercolor }) => ({
    [theme.breakpoints.up(768)]: {
      display: "none",
    },
  })
);
const MenuItemWrapper = styled(MenuItem)(
  ({ theme, bordercolor, hovercolor }) => ({
    [theme.breakpoints.down(700)]: {
      display: "none",
    },
  })
);

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const logoutFunction = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const isAuthanticated = localStorage.getItem("token");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButtonWrapper
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButtonWrapper>
          <MenuItemWrapper>
            <Typography textAlign="center">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                smooth
                to="/"
              >
                Home
              </Link>
            </Typography>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <Typography textAlign="center">
              <Link
                smooth
                to="#services"
                style={{ textDecoration: "none", color: "white" }}
              >
                Services
              </Link>
            </Typography>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <Typography textAlign="center">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                smooth
                to="#gallery"
              >
                Gallery
              </Link>
            </Typography>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <Typography textAlign="center">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                smooth
                to="#aboutus"
              >
                About Us
              </Link>
            </Typography>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <Typography textAlign="center">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                smooth
                to="#contactus"
              >
                Contact Us
              </Link>
            </Typography>
          </MenuItemWrapper>
          <ButtonWrapper
            id="demo-positioned-button"
            aria-controls={open1 ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open1 ? "true" : undefined}
            onClick={handleClick}
          >
            <IconButton>
              <Avatar alt="Remy Sharp" src="/images/logo.jpeg" />
            </IconButton>
          </ButtonWrapper>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open1}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            style={{ marginTop: 50 }}
          >
            {isAuthanticated && (
              <MenuItem onClick={handleClose}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </MenuItem>
            )}

            <MenuItem onClick={handleClose}>
              {isAuthanticated ? (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/login"
                  onClick={logoutFunction}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/login"
                >
                  Login
                </Link>
              )}
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          <ListItem
            disablePadding
            component={Link}
            style={{ color: "black" }}
            smooth
            to="#services"
          >
            <ListItemButton>
              <ListItemIcon>
                <AppShortcutIcon />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            component={Link}
            style={{ color: "black" }}
            smooth
            to="#gallery"
          >
            <ListItemButton>
              <ListItemIcon>
                <CollectionsIcon />
              </ListItemIcon>
              <ListItemText primary="Gallery" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            component={Link}
            style={{ color: "black" }}
            smooth
            to="#aboutus"
          >
            <ListItemButton>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            component={Link}
            style={{ color: "black" }}
            smooth
            to="#services"
          >
            <ListItemButton>
              <ListItemIcon>
                <ProductionQuantityLimitsIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            component={Link}
            style={{ color: "black" }}
            smooth
            to="#contactus"
          >
            <ListItemButton>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
