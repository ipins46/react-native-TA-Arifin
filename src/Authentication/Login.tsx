import React, { useContext, useRef } from "react";
import { TextInput as RNTextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import * as Yup from "yup";

import { Container, Button, Text, Box } from "../components";
import { AuthNavigationProps } from "../components/Navigation";
import TextInput from "../components/Form/TextInput";
// import Checkbox from "../components/Form/Checkbox";
import Footer from "./components/Footer";
// import { useFormik } from "formik";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from "../Context/context";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {

  const {sigIn} = useContext(AuthContext);

  const onSubmit = async (data) => {
    // console.log('data', data);
    sigIn(data.email, data.password)
    // navigation.navigate('Home')
  }
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "all",
  });
  const password = useRef<RNTextInput>(null);
  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate("SignUp")}
    />
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Welcome Back
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Use your credentials below and login to your account.
      </Text>
      <Box>
        <Box marginBottom="m">
        <Controller
          control={control}
          name="email"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isTouched, error },
          }) => (
            <TextInput
              icon="mail"
              placeholder="Enter your email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={error}
              touched={isTouched}
              autoCompleteType="email"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => password.current?.focus()}
            />
          )}
        />
        </Box>
        <Controller
          control={control}
          name="password"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isTouched, error },
          }) => (
            <TextInput
              icon="lock"
              placeholder="Enter your password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={error}
              touched={isTouched}
              autoCompleteType="password"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => passwords.current?.focus()}
              secureTextEntry
            />
          )}
        />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginVertical="s"
          alignItems="center"
        >
          {/* <Checkbox
            label="Remember me"
            checked={values.remember}
            onChange={() => setFieldValue("remember", !values.remember)}
          /> */}
          <BorderlessButton
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text variant="button" color="primary">
              Forgot Password
            </Text>
          </BorderlessButton>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Log into your account"
            onPress= {handleSubmit(onSubmit)}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;