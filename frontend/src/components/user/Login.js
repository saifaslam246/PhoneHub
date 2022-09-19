import { useState } from "react";
import axios from "axios";
// material-ui
import { useTheme } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  Card,
  styled,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";
import { EmailRegEx } from "../../utils/emailValidationRegex";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router";

const CardWrapper = styled(Card)(({ theme, bordercolor, hovercolor }) => ({
  [theme.breakpoints.down(415)]: {
    marginLeft: 30,
    marginTop: 120,
    width: 320,
  },
  [theme.breakpoints.up(539)]: {
    marginLeft: 60,
    marginTop: 120,
    width: 430,
  },
  [theme.breakpoints.up(766)]: {
    marginLeft: 150,
    marginTop: 350,
    width: 550,
  },
  [theme.breakpoints.up(1024)]: {
    marginLeft: 400,
    marginTop: 150,
    width: 500,
  },
}));

const FormControlWrapper = styled(FormControl)(
  ({ theme, bordercolor, hovercolor }) => ({
    // marginTop: 4,
    marginBottom: 20,
  })
);

const FirebaseLogin = ({ ...others }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [checked, setChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogin = async (
    values,
    { setErrors, setStatus, setSubmitting }
  ) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/login", formData, config);

      localStorage.setItem("token", res.data.token);

      if (res.status === 200) {
        navigate("/dashboard");
      }
    } catch (err) {
      toast.error("Invalid Email and Password");
      if (err.response.status === 401) {
        setErrors({ submit: err.response.data.errMessage });
      } else {
        console.log(err);
        setErrors({ submit: "Unexpected error while login.Try again!!!" });
      }
    }
  };
  const tokenData = localStorage.getItem("token");
  if (tokenData) {
    navigate("/");
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          email: "",
          password: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .max(255)
            .required("Email is required")
            .matches(EmailRegEx, "Email must be valid"),
          password: Yup.string().max(255).required("Password is required"),
        })}
        onSubmit={handleLogin}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <CardWrapper>
            <form onSubmit={handleSubmit} {...others}>
              <FormControlWrapper
                fullWidth
                error={Boolean(touched.email && errors.email)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel
                  htmlFor="outlined-adornment-email-login"
                  sx={{ marginTop: 0.5 }}
                >
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-login"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Email"
                  inputProps={{}}
                />
                {touched.email && errors.email && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-email-login"
                  >
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControlWrapper>

              <FormControl
                fullWidth
                error={Boolean(touched.password && errors.password)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="outlined-adornment-password-login">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-login"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  name="password"
                  // autoComplete="new-password"
                  autoComplete="off"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  inputProps={{}}
                />
                {touched.password && errors.password && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-password-login"
                  >
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
              </Stack>
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}

              <Box sx={{ mt: 2 }}>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Sign in
                </Button>
              </Box>
            </form>
          </CardWrapper>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};

export default FirebaseLogin;
