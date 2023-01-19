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
} from "./RegisterElements";

const Register = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            <FaBackspace style={{ fontSize: 60 }} />
          </Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Create a new account</FormH1>
              <FormLabel htmlFor="for">First Name</FormLabel>
              <FormInput type="text" required />
              <FormLabel htmlFor="for">Las tName</FormLabel>
              <FormInput type="text" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Register</FormButton>
              <Text>
                Alerdy have an account? <LinkSign to="/login"> Login</LinkSign>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Register;
