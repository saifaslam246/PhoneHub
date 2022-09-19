import { Card, CardMedia, Grid, Typography, styled, Box } from "@mui/material";

const HeadingWrapper = styled(Typography)(
  ({ theme, bordercolor, hovercolor }) => ({
    [theme.breakpoints.down(915)]: {
      display: "none",
    },

    [theme.breakpoints.up(915)]: {
      marginLeft: 390,
      fontSize: "bold",
      marginTop: 50,
      marginBottom: 60,
    },
    [theme.breakpoints.up(1100)]: {
      marginLeft: 560,
      fontSize: "bold",
      marginTop: 50,
      marginBottom: 60,
    },
  })
);

const AboutWrapper = styled(Typography)(
  ({ theme, bordercolor, hovercolor }) => ({
    [theme.breakpoints.down(281)]: {
      fontSize: 35,
      marginBottom: 10,
    },
    [theme.breakpoints.down(500)]: {
      marginTop: -50,
      marginLeft: 60,
    },
    [theme.breakpoints.up(500)]: {
      marginTop: -50,
      marginLeft: 260,
    },
    [theme.breakpoints.up(910)]: {
      marginLeft: 7,
      marginBottom: 15,
      marginTop: -20,
    },
  })
);

const MissionWrapper = styled(Typography)(
  ({ theme, bordercolor, hovercolor }) => ({
    [theme.breakpoints.down(281)]: {
      fontSize: 35,
      marginBottom: 10,
    },
    [theme.breakpoints.down(500)]: {
      marginTop: 0,
      marginBottom: 10,
      marginLeft: 60,
    },
    [theme.breakpoints.up(500)]: {
      marginTop: -50,
      marginLeft: 260,
    },
    [theme.breakpoints.up(910)]: {
      marginLeft: 7,
      marginBottom: 15,
      marginTop: -20,
    },
  })
);

function AboutUs() {
  return (
    <Box id="aboutus">
      <HeadingWrapper variant="h3">About Us</HeadingWrapper>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={5}>
          <AboutWrapper variant="h3">Phone hub</AboutWrapper>
          <Typography variant="p">
            For the last ten years, we have been providing high quality Mobile
            Phone Service & Repairs, iPad and tablet repairs for private
            individuals and businesses across the North East. We are a team of
            highly skilled Technicians and can repair all iPhone or Android
            phones. When you walk in at Phone hub, you know you can count on a
            wealth of experience in repairing portable devices, diagnosing
            faults and upgrading the software.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              sx={{ margin: 2, borderRadius: 5 }}
              component="img"
              height="240"
              image="/images/img11.jpg"
              alt="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <MissionWrapper variant="h3">Our Mission</MissionWrapper>
          <Typography variant="p">
            ✓ Provide the best possible solutions at a reasonable price. <br />
            ✓ Use only high quality genuine replacement spare parts. <br />
            ✓ Our aim is to maintain 100% customers satisfaction.
            <br />
            ✓ Provide innovative repairservices for phones, tablets, laptops and
            more. <br />
            ✓Strive to get youback to normal use of your device as soon as
            possible.
            <br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              sx={{ margin: 2, borderRadius: 5 }}
              component="img"
              height="240"
              image="/images/img12.jpg"
              alt="green iguana"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
export default AboutUs;
