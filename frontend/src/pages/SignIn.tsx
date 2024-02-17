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
import { useRecoilValue, useSetRecoilState } from "recoil";
import { signedInState, toastValue, userId } from "../recoil/atom";
import { useEffect } from "react";

const schema = z.object({
  username: z
    .string()
    .min(4, { message: "username should contain at least 4 characters" })
    .max(20),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" }),
});

type FormFields = z.infer<typeof schema>;

const SignIn = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const setSignedIn = useSetRecoilState(signedInState);
  const setUserId = useSetRecoilState(userId);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/signin",
        data
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.id);
      setSignedIn((value) => true);
      setUserId((id) => response.data.id);
      toast({
        position: "top-right",
        title: "User Logged In successfully",
        description: response.data.msg,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } catch (error: any) {
      toast({
        position: "top-right",
        title: "Error Occured",
        description: error.response.data.msg,
        status: "error",
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
              Sign In!
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.username} mb={4}>
                <FormLabel htmlFor="usernmae">Username</FormLabel>
                <Input
                  id="username"
                  placeholder="username"
                  {...register("username")}
                />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
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
                Sign In
              </Button>
            </form>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

export default SignIn;
