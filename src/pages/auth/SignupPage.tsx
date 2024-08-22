import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Link as MuiLink,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../utils/auth";
import { useForm } from "react-hook-form";
import { SignupCredentials } from "../../lib/types";
import { regex } from "../../constants/regex";

export const SignupPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupCredentials>();
  const navigate = useNavigate();

  const onSubmit = async (data: SignupCredentials) => {
    await signup(data).then(response => {
      console.log("Response: ", response);
      navigate("/login");
    }).then(err => console.log(err));
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
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Full Name"
            autoComplete="name"
            autoFocus
            {...register("name", {
              required: "Name is a required field!",
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            autoComplete="email"
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
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            {
            ...register("password", {
              required: "Password is a required field!", minLength: {
                value: 8,
                message: "Password should consist of 8 characters!"
              },
              pattern: {
                value: regex.password,
                message: 'Password should contain at least a uppercase, lowercase letter, special character and a number!',
              },
            })
            }
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <MuiLink component={Link} to="/login" variant="body2">
            {"Already have an account? Sign In"}
          </MuiLink>
        </Box>
      </Box>
    </Container>
  );
};
