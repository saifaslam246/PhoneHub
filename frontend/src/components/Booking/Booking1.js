import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Box,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import DatePicker from "sassy-datepicker";
import { useTheme } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// third party
import * as Yup from "yup";
import { Formik } from "formik";
import { EmailRegEx } from "../../utils/emailValidationRegex";
import { LoadingButton } from "@mui/lab";
const AddUserForm = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const Issue = [
    "Charging port",
    "Mobile fone screen repair",
    "Diagnostic",
    "Battery Replacement",
    "Water Damage",
    "Camera Replacement",
    "Software and Data Recovery",
    "Other Issue",
  ];
  const timeSlot = [
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "13:00 AM",
    "14:00 AM",
    "15:00 AM",
    "16:00 AM",
    "17:00 AM",
    "18:00 AM",
  ];

  const handleAddUser = async (
    values,
    { setErrors, setStatus, setSubmitting }
  ) => {
    const isAuthanticated = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("issue", values.issue);
    formData.append("number", values.number);
    formData.append("date", values.date);
    formData.append("time", values.time);
    try {
      await axios.post("http://localhost:4000/api/v1/appoinment/new", formData);
      axios.post("http://localhost:4000/api/v1/email", formData);

      if (isAuthanticated) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      if (err.response.status === 402) {
        toast.error(
          "This time is already booked. Kindly change your appointment time."
        );
      }
      // toast.error(err.response.data.errMessage);
      setErrors({ submit: err.response.data.errMessage });
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          number: "",
          issue: "Charging port",
          time: "14:00 AM",
          date: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().min(3).max(255).required("Name is required"),
          email: Yup.string()
            .max(255)
            .required("Email is required")
            .matches(EmailRegEx, "Email must be valid"),
          number: Yup.string().max(255).required("Number is required"),
          issue: Yup.string().required("issue is required"),
          time: Yup.string().required("time is required"),
          date: Yup.string().required("date is required"),
        })}
        onSubmit={handleAddUser}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid
                container
                item
                spacing={4}
                xs={12}
                style={{ marginLeft: 40, marginRight: 70 }}
              >
                <Grid item xs={12} lg={6}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.name && errors.name)}
                  >
                    <InputLabel htmlFor="outlined-name">
                      Enter you Name
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-name"
                      type="text"
                      value={values.name}
                      name="name"
                      onBlur={handleBlur}
                      onChange={(event) => handleChange(event)}
                      label="Enter you Name"
                      inputProps={{}}
                    />
                    {touched.name && errors.name && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-name"
                      >
                        {errors.name}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  >
                    <InputLabel htmlFor="outlined-name">Email</InputLabel>
                    <OutlinedInput
                      id="outlined-name"
                      type="text"
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={(event) => handleChange(event)}
                      label="email"
                      inputProps={{}}
                    />
                    {touched.email && errors.email && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-name"
                      >
                        {errors.email}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.number && errors.number)}
                  >
                    <InputLabel htmlFor="outlined-name">
                      Contact Number
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-name"
                      type="Number"
                      value={values.number}
                      name="number"
                      onBlur={handleBlur}
                      onChange={(event) => handleChange(event)}
                      label="Contact Number"
                      inputProps={{}}
                    />
                    {touched.number && errors.number && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-name"
                      >
                        {errors.number}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.issue && errors.issue)}
                    sx={{ ...theme.typography.customInput }}
                  >
                    <InputLabel htmlFor="outlined-adornment-email-login">
                      Select you Issue
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="issue"
                      value={values.issue}
                      label="Select you Issue"
                      onChange={handleChange}
                    >
                      {Issue.map((issue) => {
                        return <MenuItem value={issue}>{issue}</MenuItem>;
                      })}
                    </Select>
                    {touched.issue && errors.issue && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-email-login"
                      >
                        {errors.issue}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.time && errors.time)}
                    sx={{ ...theme.typography.customInput }}
                  >
                    <InputLabel htmlFor="outlined-adornment-email-login">
                      Select Time
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="time"
                      value={values.time}
                      label="Select Time"
                      onChange={handleChange}
                    >
                      {timeSlot.map((slot) => {
                        return <MenuItem value={slot}>{slot}</MenuItem>;
                      })}
                    </Select>
                    {touched.time && errors.time && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-email-login"
                      >
                        {errors.time}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.date && errors.date)}
                    sx={{ ...theme.typography.customInput }}
                  >
                    <InputLabel
                      htmlFor="outlined-date"
                      style={{ marginTop: -18 }}
                    >
                      Appointment Date
                    </InputLabel>
                    <DatePicker
                      id="outlined-date"
                      onBlur={handleBlur}
                      label="Appointment Date"
                      inputProps={{}}
                      style={{ width: "100%" }}
                      minDate={new Date(Date.now() - 86400000)}
                      name="date"
                      onChange={async (val) => setFieldValue("date", val)}
                    />
                    {touched.date && errors.date && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-email-login"
                      >
                        {errors.date}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {errors?.submit && (
                  <FormHelperText error id="standard-weight-helper-text-name">
                    {errors?.submit}
                  </FormHelperText>
                )}
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{ mt: 2, position: "relative" }}
                  style={{ marginLeft: 70, marginRight: 70, marginBottom: 30 }}
                >
                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                  >
                    Add your Appointment
                  </LoadingButton>
                </Box>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};

export default AddUserForm;
