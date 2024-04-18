import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { FaChartPie } from "react-icons/fa";

const Index = () => {
  const data = [
    { name: "Marketing", value: 5 },
    { name: "Sales", value: 15 },
    { name: "Data", value: 4 },
  ];

  const maxBubbleSize = 200; // max size for the largest bubble

  // Find the maximum value in the data to scale bubble sizes
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <Box p={5}>
      <Flex justifyContent="center" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Interactive Bubble Chart <FaChartPie />
        </Text>
      </Flex>
      <Flex justifyContent="space-around" alignItems="center">
        {data.map((item, index) => (
          <Button key={index} size="lg" height={`${(item.value / maxValue) * maxBubbleSize}px`} width={`${(item.value / maxValue) * maxBubbleSize}px`} borderRadius="50%" bg="teal.300" color="white" _hover={{ bg: "teal.400" }} boxShadow="md" onClick={() => alert(`${item.name}: ${item.value}`)}>
            {item.name}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default Index;
