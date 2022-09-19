import * as React from "react";
import Card from "@mui/material/Card";
import { Grid } from "@material-ui/core";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import { Typography, styled, Button } from "@mui/material";

const HeadingWrapper = styled(Typography)(
  ({ theme, bordercolor, hovercolor }) => ({
    [theme.breakpoints.down(281)]: {
      fontSize: 30,
    },
    [theme.breakpoints.down(500)]: {
      marginLeft: 100,
    },
    [theme.breakpoints.up(500)]: {
      marginLeft: 330,
    },
    [theme.breakpoints.up(1000)]: {
      marginLeft: 430,
      fontSize: "bold",
    },
    [theme.breakpoints.up(1100)]: {
      marginLeft: 560,
      fontSize: "bold",
    },
  })
);

const CardWrapper = styled(Card)(({ theme, bordercolor, hovercolor }) => ({
  [theme.breakpoints.down(915)]: {
    marginBottom: 80,
  },
}));
export default function MediaCard() {
  const navigate = useNavigate();
  return (
    <Box id="services">
      <HeadingWrapper variant="h3">Services</HeadingWrapper>
      <Grid container spacing={4} justifyContent="center">
        <Card sx={{ maxWidth: 345, m: 4 }}>
          <CardMedia
            sx={{ margin: 2 }}
            component="img"
            height="240"
            image="/images/img1.avif"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mobile phone screen repair
            </Typography>
            <Typography variant="body2" color="text.secondary">
              100% Satisfaction Guaranteed From our team of fully trained
              engineer's. Our team is dedicated to providing prompt, efficient &
              affordable repair services for your damaged device screens
            </Typography>
          </CardContent>
          <Button
            size="large"
            variant="contained"
            style={{ marginLeft: 15, marginBottom: 20 }}
            onClick={() => navigate("/booking")}
          >
            Book Appoinment
          </Button>
        </Card>
        <Card sx={{ maxWidth: 345, m: 4 }}>
          <CardMedia
            sx={{ margin: 2 }}
            component="img"
            height="240"
            image="/images/img2.jfif"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Charging Port
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Are you having trouble charging your Android or Apple Device?
              Bring your device to us and we will fix it in no time.
            </Typography>
          </CardContent>
          <Button
            size="large"
            variant="contained"
            style={{ marginLeft: 15, marginBottom: 20 }}
            onClick={() => navigate("/booking")}
          >
            Book Appoinment
          </Button>
        </Card>
        <Card sx={{ maxWidth: 345, m: 4 }}>
          <CardMedia
            sx={{ margin: 2 }}
            component="img"
            height="240"
            image="/images/img3.avif"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Camera replacement
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Unable to capture your precious moments? Let our professionals fix
              it for you without having to replace your expensive …
            </Typography>
          </CardContent>
          <Button
            size="large"
            variant="contained"
            style={{ marginLeft: 15, marginBottom: 20 }}
            onClick={() => navigate("/booking")}
          >
            Book Appoinment
          </Button>
        </Card>
        <Card sx={{ maxWidth: 345, m: 4 }}>
          <CardMedia
            sx={{ margin: 2 }}
            component="img"
            height="240"
            image="/images/img4.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              iPad & Tablet Repair
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We provide fast & affordable Tablet repairs for iOS, Android &
              Windows systems. Rely on us when you need Tablet repair …
            </Typography>
          </CardContent>
          <Button
            size="large"
            variant="contained"
            style={{ marginLeft: 15, marginBottom: 20 }}
            onClick={() => navigate("/booking")}
          >
            Book Appoinment
          </Button>
        </Card>
        <Card sx={{ maxWidth: 345, m: 4 }}>
          <CardMedia
            sx={{ margin: 2 }}
            component="img"
            height="240"
            image="/images/img5.full"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Battery replacement
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Battery issues in your smartphone? Fret not, simply bring your
              phone to our technicians at Phone Hub & we will replace …
            </Typography>
          </CardContent>
          <Button
            size="large"
            variant="contained"
            style={{ marginLeft: 15, marginBottom: 20 }}
            onClick={() => navigate("/booking")}
          >
            Book Appoinment
          </Button>
        </Card>
        <Card sx={{ maxWidth: 345, m: 4 }}>
          <CardMedia
            sx={{ margin: 2 }}
            component="img"
            height="240"
            image="/images/img6.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Diagnostic
            </Typography>
            <Typography variant="body2" color="text.secondary">
              No display ? don't worry we will find out the problem. If you have
              tried your ways & your phone is yet not working let …
            </Typography>
          </CardContent>
          <Button
            size="large"
            variant="contained"
            style={{ marginLeft: 15, marginBottom: 20 }}
            onClick={() => navigate("/booking")}
          >
            Book Appoinment
          </Button>
        </Card>
        <Card sx={{ maxWidth: 345, m: 4 }}>
          <CardMedia
            sx={{ margin: 2 }}
            component="img"
            height="240"
            image="/images/img7.jfif"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Software & Data Recovery
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Get the latest version of software. Ask us to recover and data
              stored on mobile phones, SD cards, and tablets. …
            </Typography>
          </CardContent>
          <Button
            size="large"
            variant="contained"
            style={{ marginLeft: 15, marginBottom: 20 }}
            onClick={() => navigate("/booking")}
          >
            Book Appoinment
          </Button>
        </Card>
        <Card sx={{ maxWidth: 345, m: 4 }}>
          <CardMedia
            sx={{ margin: 2 }}
            component="img"
            height="240"
            image="/images/img8.jfif"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Water Damage
            </Typography>
            <Typography variant="body2" color="text.secondary">
              If you have tried your ways & your phone is yet not working let us
              diagnose your phone. Our expert technicians at …
            </Typography>
          </CardContent>
          <Button
            size="large"
            variant="contained"
            style={{ marginLeft: 15, marginBottom: 20 }}
            onClick={() => navigate("/booking")}
          >
            Book Appoinment
          </Button>
        </Card>
        <CardWrapper sx={{ maxWidth: 345, m: 4 }}>
          <CardMedia
            sx={{ margin: 2 }}
            component="img"
            height="240"
            image="/images/img9.jfif"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Other Repairs
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Any problem with your phone ?Bring at Phone hub our team will help
              you to get your device working.
            </Typography>
          </CardContent>
          <Button
            size="large"
            variant="contained"
            style={{ marginLeft: 15, marginBottom: 20 }}
            onClick={() => navigate("/booking")}
          >
            Book Appoinment
          </Button>
        </CardWrapper>
      </Grid>
    </Box>
  );
}
