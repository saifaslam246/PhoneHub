import {
  Card,
  Container,
  ImageList,
  Box,
  ImageListItem,
  Typography,
  styled,
  ImageListItemBar,
} from "@mui/material";

const itemData = [
  {
    img: "/images/img10.jpeg",
    title: "Breakfast",
  },
  {
    img: "/images/img17.jpg",
    title: "Burger",
  },
  {
    img: "/images/img13.jfif",
    title: "Camera",
  },
  {
    img: "/images/img8.jfif",
    title: "Coffee",
  },
  {
    img: "/images/img15.jfif",
    title: "Hats",
  },
  {
    img: "/images/img6.jpeg",
    title: "Honey",
  },
  {
    img: "/images/img1.avif",
    title: "Basketball",
  },
  {
    img: "/images/img3.avif",
    title: "Fern",
  },
  {
    img: "/images/img15.jfif",
    title: "Mushrooms",
  },
  {
    img: "/images/img18.jpg",
    title: "Tomato basil",
  },
  {
    img: "/images/img16.jfif",
    title: "Sea star",
  },
  {
    img: "/images/img19.jpg",
    title: "Bike",
  },
];
const HeadingWrapper = styled(Typography)(
  ({ theme, bordercolor, hovercolor }) => ({
    [theme.breakpoints.down(281)]: {
      fontSize: 35,
      marginBottom: 10,
    },
    [theme.breakpoints.down(500)]: {
      marginTop: 50,
      marginLeft: 120,
      marginBottom: -50,
    },
    [theme.breakpoints.up(500)]: {
      marginLeft: 330,
      marginTop: 50,
      marginBottom: -50,
    },
    [theme.breakpoints.up(1000)]: {
      marginLeft: 430,
      fontSize: "bold",
    },
    [theme.breakpoints.up(1100)]: {
      marginTop: 50,
      marginLeft: 560,
      fontSize: "bold",
    },
  })
);
const Rooms = () => {
  return (
    <Box id="gallery">
      <HeadingWrapper variant="h3">Gallery</HeadingWrapper>
      <Container sx={{ marginTop: 10 }}>
        <ImageList
          gap={12}
          sx={{
            mb: 8,
            gridTemplateColumns:
              "repeat(auto-fill, minmax(280px, 1fr))!important",
          }}
        >
          {itemData.map((room) => (
            <Card key={room._id} style={{ width: 370 }}>
              <ImageListItem sx={{ height: "100% !important" }}>
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)",
                  }}
                  position="top"
                />
                <img
                  src={room.img}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                  alt="img"
                />
              </ImageListItem>
            </Card>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
};

export default Rooms;
