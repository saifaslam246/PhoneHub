import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Stack, Typography, Input, Divider } from "@mui/material/";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { HashLink as Link } from "react-router-hash-link";
import SendIcon from "@mui/icons-material/Send";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
const ariaLabel = { "aria-label": "description" };
const Item = styled(Grid)(
  ({ theme, marginLeft, marginRight, backgroundColor }) => ({
    marginLeft: marginLeft,
    marginRight: marginRight,
    backgroundColor: backgroundColor,
  })
);
const GridWrapper = styled(Grid)(({ theme, bordercolor, hovercolor }) => ({
  [theme.breakpoints.down(1025)]: {
    display: "none",
  },
}));
const DividerWrapper = styled(Divider)(
  ({ theme, bordercolor, hovercolor }) => ({
    marginTop: "20px",
    width: "1200",
    marginLeft: "70",
    [theme.breakpoints.down(1025)]: {
      marginTop: "5px",
      width: "600",
      marginLeft: "30",
    },
  })
);

const StackWrapper = styled(Stack)(({ theme, bordercolor, hovercolor }) => ({
  marginTop: 10,
  fontSize: 12,
  marginLeft: 500,

  [theme.breakpoints.down(1025)]: {
    marginLeft: 250,
  },

  [theme.breakpoints.down(541)]: {
    fontSize: 10,
    marginLeft: 40,
  },
}));

export default function BasicGrid() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ backgroundColor: "#DFDFDF", marginRight: 40, marginLeft: 40 }}
    >
      <GridWrapper container spacing={2} marginLeft="40px" marginRight="40px">
        <Grid item xs={3} style={{ marginLeft: 10 }}>
          <Stack spacing={2}>
            <Item>
              <img
                style={{ width: 60, height: 60 }}
                src="./images/logo.jpeg"
                alt="logo img"
              />
            </Item>
            <Item>
              <Typography style={{ marginBottom: 10 }} variant="h5">
                Subscribe Now
              </Typography>
              <Input
                style={{ marginBottom: 20 }}
                placeholder="Enter your Email"
                inputProps={ariaLabel}
              />
            </Item>
            <Item>
              <Button
                size="small"
                endIcon={<SendIcon />}
                style={{ backgroundColor: "black" }}
              >
                Subscribe
              </Button>
            </Item>
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack spacing={2}>
            <Item>
              <Typography style={{ marginBottom: 5 }} variant="h5">
                Information
              </Typography>
            </Item>
            <Link
              style={{ textDecoration: "none", color: "#785b5b", fontSize: 18 }}
              smooth
              to="#aboutus"
            >
              About Us
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#785b5b", fontSize: 18 }}
              smooth
              to="#services"
            >
              Service
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#785b5b", fontSize: 18 }}
              smooth
              to="#gallery"
            >
              Gallery
            </Link>

            <Link
              style={{ textDecoration: "none", color: "#785b5b", fontSize: 18 }}
              smooth
              to="/"
            >
              Home
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#785b5b", fontSize: 18 }}
              smooth
              to="#contactus"
            >
              Contact Us
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={3}>
          <Stack spacing={2}>
            <Item>
              <Typography style={{ marginBottom: 5 }} variant="h5">
                Our Services
              </Typography>
            </Item>
            <Item
              style={{
                textDecoration: "none",
                color: "#785b5b",
                fontSize: 15,
                marginBottom: -9,
              }}
            >
              Mobile phone screen repair
            </Item>
            <Item
              style={{
                textDecoration: "none",
                color: "#785b5b",
                fontSize: 15,
                marginBottom: -9,
              }}
            >
              Charging Port{" "}
            </Item>
            <Item
              style={{
                textDecoration: "none",
                color: "#785b5b",
                fontSize: 15,
                marginBottom: -9,
              }}
            >
              Camera replacement iPad
            </Item>
            <Item
              style={{
                textDecoration: "none",
                color: "#785b5b",
                fontSize: 15,
                marginBottom: -9,
              }}
            >
              Tablet Repair{" "}
            </Item>
            <Item
              style={{
                textDecoration: "none",
                color: "#785b5b",
                fontSize: 15,
                marginBottom: -9,
              }}
            >
              Battery replacement
            </Item>

            <Item
              style={{
                textDecoration: "none",
                color: "#785b5b",
                fontSize: 15,
                marginBottom: -9,
              }}
            >
              Software & Data Recovery
            </Item>
            <Item
              style={{
                textDecoration: "none",
                color: "#785b5b",
                fontSize: 15,
                marginBottom: -9,
              }}
            >
              Water Damage
            </Item>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={2}>
            <Item>
              <Typography style={{ marginBottom: 5 }} variant="h5">
                Contact Information
              </Typography>
            </Item>
            <Stack direction="row" spacing={2}>
              <Item
                style={{
                  marginTop: 3,
                }}
              >
                <HomeIcon />
              </Item>
              <Item
                style={{
                  textDecoration: "none",
                  color: "#785b5b",
                  fontSize: 20,
                }}
              >
                Phone Hub Bishop Auckland
              </Item>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Item
                style={{
                  marginTop: 3,
                }}
              >
                <PlaceIcon />
              </Item>
              <Item
                style={{
                  textDecoration: "none",
                  color: "#785b5b",
                  fontSize: 20,
                }}
              >
                93 newgate street bishop auckland DL14 7EW
              </Item>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Item
                style={{
                  marginTop: 3,
                }}
              >
                <PhoneIcon />
              </Item>
              <Item
                style={{
                  textDecoration: "none",
                  color: "#785b5b",
                  fontSize: 20,
                }}
              >
                +44 7454 595444
              </Item>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Item
                style={{
                  marginTop: 3,
                }}
              >
                <MailIcon />
              </Item>
              <Item
                style={{
                  textDecoration: "none",
                  color: "#785b5b",
                  fontSize: 20,
                }}
              >
                phonehubbishop@gmail.com
              </Item>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Item
                style={{
                  marginTop: 3,
                }}
              >
                <AccessTimeIcon />
              </Item>
              <Item
                style={{
                  textDecoration: "none",
                  color: "#785b5b",
                  fontSize: 17,
                }}
              >
                Monday - Saturday : 10:00AM - 4:30PM
              </Item>
            </Stack>
          </Stack>
        </Grid>
      </GridWrapper>
      <DividerWrapper />
      <StackWrapper
        direction="row"
        spacing={2}
        // style={{ marginTop: 10, fontSize: 12, marginLeft: 500 }}
      >
        <Item>
          2022 @ http://saif-portfolio-io.herokuapp.com | All Right Reserved
        </Item>
        <Stack
          direction="row"
          spacing={2}
          style={{
            marginLeft: 50,
          }}
        >
          <a
            href="https://m.facebook.com/phonehubbishop/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noreferrer"
          >
            <GoogleIcon />
          </a>
        </Stack>
      </StackWrapper>
    </Box>
  );
}
