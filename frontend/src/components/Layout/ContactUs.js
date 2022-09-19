import {
  Box,
  CardMedia,
  Card,
  Grid,
  Typography,
  TextField,
  styled,
  Button,
} from "@mui/material";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {  useTheme, useMediaQuery } from "@material-ui/core";

const GridWrapper = styled(Grid)(({ theme, bordercolor, hovercolor }) => ({
  [theme.breakpoints.down(500)]: {
    display: "none",
  },
}));
const ContactGridWrapper = styled(Box)(
  ({ theme, bordercolor, hovercolor }) => ({
    [theme.breakpoints.down(500)]: {
      marginLeft: -80,
    },
  })
);

const TypographyWrapper = styled(Typography)(
  ({ theme, bordercolor, hovercolor }) => ({
    marginLeft: 140,
    marginTop: 1,
    [theme.breakpoints.down(281)]: {
      fontSize: 22,
      marginBottom: 10,
    },
    [theme.breakpoints.down(500)]: {
      marginLeft: 90,
      marginTop: 3,
    },
  })
);

function ContactUs() {
  function sendEmail(e) {
    toast.success("Thank You For Contacting Us");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zsn3ldp",
        "template_mo6hfmg",

        e.target,
        "user_eUQ9AAvFBWJv825QPdR2r"
      )
      .then((res) => console.log(res))
      .then((err) => console.log(err));
    e.target.reset();
  }

  return (
    <Box id="contactus">
      <Card sx={{ m: 5 }}>
        <Grid container spacing={2} alignContent="center">
          <GridWrapper item xm={12} md={12} lg={6}>
            <CardMedia
              sx={{ margin: 2, borderRadius: 5 }}
              component="img"
              height="500"
              image="/images/img10.jpeg"
              alt="green iguana"
            />
          </GridWrapper>
          <Grid item xm={12} md={12} lg={6}>
            <TypographyWrapper variant="h4">Contact Us</TypographyWrapper>
            <Box
              sx={{
                marginLeft: 8,
                "& .MuiTextField-root": { m: 3, width: "45ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <form onSubmit={sendEmail}>
                <ContactGridWrapper>
                  <TextField
                    error
                    label="Name"
                    placeholder="Enter your Name"
                    variant="outlined"
                    required
                    name="name"
                    style={{
                      width: 400,
                    }}
                    // fullWidth={mobileDevice ? fullWidth : "400"}
                  />
                </ContactGridWrapper>
                <ContactGridWrapper>
                  <TextField
                    type="text"
                    error
                    id="standard-error"
                    label="Email"
                    placeholder="Enter your Email"
                    variant="outlined"
                    name="email"
                    required
                    style={{
                      width: 400,
                    }}
                  />
                </ContactGridWrapper>
                <ContactGridWrapper>
                  <TextField
                    type="number"
                    error
                    id="standard-error"
                    label="Phone Number"
                    placeholder="Enter your Contact Number"
                    variant="outlined"
                    name="number"
                    required
                    style={{
                      width: 400,
                    }}
                  />
                </ContactGridWrapper>
                <ContactGridWrapper>
                  <TextField
                    type="text"
                    error
                    id="standard-error"
                    label="Detail"
                    placeholder="Enter your Descrption"
                    name="message"
                    variant="outlined"
                    required
                    style={{
                      width: 400,
                    }}
                  />
                </ContactGridWrapper>

                <Button
                  type="submit"
                  value="send"
                  variant="contained"
                  sx={{ marginLeft: 3 }}
                  size="large"
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <ToastContainer />
    </Box>
  );
}
export default ContactUs;
