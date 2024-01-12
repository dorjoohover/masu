import { VStack, Heading } from "@chakra-ui/react";
import Animation from "./Animation";

const Title = ({ fs = 40, text, color }) => {
  return (
    <Animation classNameInView={'fadeIn'}>
      <VStack alignItems={"start"} gap={0} >
      {text.map((t, i) => {
        return i % 2 == 0 ? (
          <Heading fontSize={fs} key={i} color={color} fontWeight={100} lineHeight={0.8}>
            {t}
          </Heading>
        ) : (
          <Heading fontSize={fs} key={i} color={color} fontWeight={600} lineHeight={0.8}>
            {t}
          </Heading>
        );
      })}
    </VStack>
    </Animation>
  );
};

export default Title;
