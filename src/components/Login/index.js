import React from "react";
import { FaBackspace } from "react-icons/fa";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  LinkSign,
} from "./LoginElements";

const Login = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            <FaBackspace style={{ fontSize: 60 }} />
          </Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>
                Don't have an account?{" "}
                <LinkSign to="/signup"> Register</LinkSign>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Login;
