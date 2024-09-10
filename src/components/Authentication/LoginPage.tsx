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

import { type LoginCredentials } from "../../interfaces/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/authSchema";
import { toastError, toastSuccess } from "../../utils/toaster";
import { useAuth } from "../../hooks/useAuth";

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data: LoginCredentials) => {
    try {
      const response = await login(data);
      console.log("RESPONSE: ", response);
      toastSuccess("Logged in successfully!");
      navigate("/");
    } catch (err) {
      toastError("Invalid email or password!");
      console.log("Error: ", err);
    }
  };

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
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            autoFocus
            {...register("email")}
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
            {...register("password")}
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

export default LoginPage;
