import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import FeaturedShoes from "../components/FeaturedShoes";
import FeaturedClothes from "../components/FeaturedClothes";

const Section3 = () => {
  return (
    <Box>
      <Box mt="75px" mb="50px">
        <Heading color="gray.700" textAlign="center" fontSize="3xl" px={4}>
          FEATURED PRODUCTS
        </Heading>
      </Box>
      <Box maxW="970px" mx={{ base: 4, md: "auto" }}>
        <Tabs size="lg">
          <TabList>
            <Tab mr="5">Shoes</Tab>
            <Tab>Clothes</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/* <Product /> */}
              <FeaturedShoes />
            </TabPanel>
            <TabPanel>
              <FeaturedClothes />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Section3;
