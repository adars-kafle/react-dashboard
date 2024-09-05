import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Link as MuiLink,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "../../hooks/useAuth";
import { SignupCredentials } from "../../interfaces/types";
import { signupSchema } from "../../schemas/authSchema";
import { toastError, toastSuccess } from "../../utils/toaster";
import Loader from "../../components/Loading";

const SignupPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupCredentials>({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();

  const onSubmit = async (data: SignupCredentials) => {
    try {
      await signup(data);
      toastSuccess("Signed up successfully!");
      navigate("/login");
    } catch (error) {
      if (error instanceof Error) {
        toastError(error.message);
      } else {
        toastError("An unexpected error occurred");
      }
      console.error(error);
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
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 3 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Full Name"
            autoComplete="name"
            autoFocus
            {...register("name")}
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
            {...register("email")}
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
            {isLoading ? <Loader size={24} /> : "Sign Up"}
          </Button>
          <MuiLink component={Link} to="/login" variant="body2">
            {"Already have an account? Sign In"}
          </MuiLink>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupPage;
