import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  StyledForm,
  Container,
  LogoName,
  ErrorMessage,
  ShowPasswordButton,
  SubmitButton,
  StyledParagraph,
} from "./css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export const AccountSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const inputErrors = !errors.email || !errors.password;

  console.log(errors.email)

  const handleSubmitForm = () => {
    if (inputErrors) {
      navigate("/");
    }
  };

  return (
    <Container>
      <LogoName>
        <img src="./images/donut-logo.png" alt="Logo" />
        <h3>Tasty Treats</h3>
      </LogoName>

      <StyledForm onSubmit={handleSubmit(handleSubmitForm)}>
        <div style={{ position: "relative", display: "flex", width: "100%" }}>
          <input
            style={{ border: errors.email ? "1px solid red" : "" }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
          />
        </div>

        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <div style={{ position: "relative", display: "flex", width: "100%" }}>
          <input
            style={{
              border: errors.password ? "1px solid red" : "",
              width: "100%",
            }}
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Password"
          />
          <ShowPasswordButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </ShowPasswordButton>
        </div>
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <RouterLink
          to="/signup"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <StyledParagraph>Don't have an account?</StyledParagraph>
        </RouterLink>
        <SubmitButton type="submit">Sign In</SubmitButton>
      </StyledForm>
    </Container>
  );
};
