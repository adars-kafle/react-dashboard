import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Link as MuiLink,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../utils/auth";
import { LoginCredentials } from "../../lib/types";
import { regex } from "../../constants/regex";

export const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginCredentials) => {
    await login(data).then((response) => {
      console.log("Response: ", response);
      navigate("/");
    }).catch((err) => console.log("Error: ", err));
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            autoFocus
            {...register("email", {
              required: "Email is a required field!", pattern: {
                value: regex.email,
                message: "Please enter a valid email address!",
              },
            },)}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            {...register("password", {
              required: "Password is a required field!",
              minLength: {
                value: 8,
                message: "Password must be of at least 8 characters."
              },
              pattern: {
                value: regex.password,
                message: 'Password should contain at least a uppercase, lowercase letter, special character and a number!',
              }
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <MuiLink component={Link} to="/signup" variant="body2">
            {"Don't have an account? Sign Up"}
          </MuiLink>
        </Box>
      </Box>
    </Container>
  );
};
