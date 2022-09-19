import Header from "./Layout/Services";
import AboutUs from "./Layout/AboutUs";
import ImageGallery from "./Layout/ImageGallery";
import ContactUs from "./Layout/ContactUs";
import Footer from "./Layout/Footer";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box>
      <Header />
      <AboutUs />
      <ImageGallery />
      <ContactUs />
      <Footer />
    </Box>
  );
}

export default Home;
