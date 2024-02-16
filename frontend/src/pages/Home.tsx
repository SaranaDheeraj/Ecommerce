import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { toastValue } from "../recoil/atom";

const Home = () => {
  const toast = useToast();
  const value = useRecoilValue(toastValue);

  const showToast = () => {
    toast({
      position: "top-right",
      title: value,
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };
  useEffect(() => {
    if (value) {
      showToast();
    }
  }, [value]);
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Home;
