import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router";
import { Paper, Box, styled, Stack, Typography, Button } from "@mui/material";
import { DelBtn } from "../../ui-component/Button";
import { IconTrash } from "@tabler/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TableContainerWrapper = styled(TableContainer)(
  ({ theme, bordercolor, hovercolor }) => ({
    [theme.breakpoints.up(700)]: {
      marginTop: 35,
      marginLeft: "20%",
      width: "60%",
      height: 460,
    },
    [theme.breakpoints.down(500)]: {
      marginTop: 90,
    },
  })
);

const StackWrapper = styled(Stack)(({ theme, bordercolor, hovercolor }) => ({
  [theme.breakpoints.up(700)]: {
    marginTop: 70,
    width: "60%",
    marginLeft: "20%",
  },
  [theme.breakpoints.down(500)]: {
    marginTop: 30,
    marginLeft: "25%",
  },
}));
const TypographyWrapper = styled(Typography)(
  ({ theme, bordercolor, hovercolor }) => ({
    [theme.breakpoints.down(500)]: {
      display: "none",
    },
  })
);

export default function AcccessibleTable() {
  const [appointmentData, setAppointmentData] = useState([]);
  const navigate = useNavigate();

  const deleteAppointment = async (bookId) => {
    try {
      toast.success("delete ");
      await axios.delete(
        `http://localhost:4000/api/v1/delete-appointment/${bookId}`
      );
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    const getAppointment = async () => {
      try {
        const appointmentResponse = await axios.get(
          "http://localhost:4000/api/v1/appoinments"
        );
        setAppointmentData(appointmentResponse.data.data);
      } catch (error) {}
    };
    getAppointment();
  });
  const tokenData = localStorage.getItem("token");

  if (!tokenData) {
    navigate("/");
  }

  return (
    <Box>
      <StackWrapper
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <TypographyWrapper variant="h6" gutterBottom>
          Appoinments Detail
        </TypographyWrapper>
        <Button
          size="large"
          variant="contained"
          style={{ marginLeft: 15, marginBottom: 20 }}
          onClick={() => navigate("/booking")}
        >
          Add new Appoinment
        </Button>
      </StackWrapper>
      <TableContainerWrapper component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Contact Number</TableCell>
              <TableCell align="right">Issue</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointmentData.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row?.email}
                </TableCell>
                <TableCell align="right">{row?.name}</TableCell>
                <TableCell align="right">{row?.number}</TableCell>
                <TableCell align="right">{row?.issue}</TableCell>
                <TableCell align="right">
                  {/* {row?.time.substring(16, 24)} */}
                  {row?.time}
                </TableCell>
                <TableCell align="right">
                  {row?.date.slice(0, row?.date.length - 14)}
                </TableCell>
                <TableCell align="right">
                  <DelBtn
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteAppointment(row?._id)}
                    variant="outlined"
                  >
                    <IconTrash />
                  </DelBtn>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainerWrapper>
      <ToastContainer />
    </Box>
  );
}
