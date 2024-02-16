import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Center,
  useToast,
} from "@chakra-ui/react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { signedInState, toastValue } from "../recoil/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";

const schema = z.object({
  username: z
    .string()
    .min(4, { message: "username should contain at least 4 characters" })
    .max(20),
  email: z.string().email({ message: "email is not valid" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" }),
});

type FormFields = z.infer<typeof schema>;

const SignUp = () => {
  const toast = useToast();
  const navigate = useNavigate();

  if (useRecoilValue(signedInState)) {
    const setToastValue = useSetRecoilState(toastValue);
    useEffect(() => setToastValue((value) => "You are already Signed in!"), []);
    return <Navigate to="/" />;
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        data
      );
      toast({
        position: "top-right",
        title: "Account created.",
        description: response.data.msg,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/signin");
    } catch (error: any) {
      toast({
        position: "top-right",
        title: "Error",
        description: error.response.data.msg,
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="gray.600"
      my={5}
      mx={4}
    >
      <Card boxShadow="lg" height="auto">
        <CardBody p={0}>
          <Center>
            <Image
              width="sm"
              src="https://images.unsplash.com/photo-1670121180583-39ab653a071c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGdvb2RzfGVufDB8MHwwfHx8MA%3D%3D"
            />
          </Center>
          <Box p={4}>
            <Heading size="md" my={4}>
              Sign Up!
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.username} mb={4}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  id="username"
                  placeholder="username"
                  {...register("username")}
                />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email} mb={4}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" placeholder="email" {...register("email")} />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <FormLabel htmlFor="passsword">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  {...register("password")}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                Sign Up
              </Button>
            </form>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

export default SignUp;
