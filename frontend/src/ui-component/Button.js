import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const AddBookBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: "#FFF",
  "&:hover": {
    color: theme.palette.success.main,
    backgroundColor: "#fff",
    borderColor: theme.palette.success.main,
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "#616161",
}));

export const DelBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.error.main,
  borderColor: theme.palette.error.main,
}));

export const UpBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.success.main,
  borderColor: theme.palette.success.main,
  zIndex: 1,
}));
