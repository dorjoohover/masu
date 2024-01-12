import Animation from "@/components/Animation";
import MainButton from "@/components/Button";
import Title from "@/components/Title";
import { shuffle } from "@/functions";
import { animations, partners } from "@/values";
import { Box, Image, HStack, VStack, Stack } from "@chakra-ui/react";
import { FaChartSimple } from "react-icons/fa6";

const HeaderImages = ({
  w,
  h,
  img,
  transform,
  left,
  top,
  right,
  bottom,
  zIndex,
  pos = "relative",
  mt,
  className,
}) => {
  return (
    <Box
      pos={pos}
      w={w}
      display={"inline-block"}
      h={h}
      mt={mt}
      left={left}
      top={top}
      right={right}
      bottom={bottom}
      zIndex={zIndex}
      transform={transform}
      borderRadius={16}
      overflow={"hidden"}
      className={className}
    >
      <Image h={"100%"} w={"full"} objectFit={"cover"} src={img} />
    </Box>
  );
};

const IconView = ({ bg = "#fff", shadow = "", child, p = 4 }) => {
  return (
    <Box bg={bg} shadow={shadow} p={p} borderRadius={16}>
      {child}
    </Box>
  );
};
const Gap = () => {
  return <Box h={10} />;
};
export default function Home() {
  const pAnimation = shuffle(animations);
  return (
    <Box>
      <Box className="container">
        <HStack w={"full"} justifyContent={"space-between"}>
          <VStack h="25vw" alignItems={"start"} flex={2}>
            <Stack alignItems="strech" my={"auto"}>
              <Title fs={56} text={["Бизнесээ", "нэг дороос", "удирд"]} />
            </Stack>
            <HStack w="full" mt={4} gap={4} alignItems={"start"}>
              <MainButton>Эхлэх</MainButton>
              <MainButton border={"1px solid #aaa"} color="#aaa" bg="#fff">
                Турших
              </MainButton>
            </HStack>
          </VStack>
          <Box pos={"relative"} flex={3}>
            <HeaderImages
              img={"assets/img/woman.jpg"}
              w={"70%"}
              transform={"translateX(-50%)"}
              left={"50%"}
              h={"20vw"}
              zIndex={0}
              className={"header-1"}
            />

            <HeaderImages
              img={"assets/img/pos.jpg"}
              className={"header-2"}
              w={"35%"}
              transform={"translateX(-30%)"}
              left={"38%"}
              h={"15vw"}
              mt={4}
              zIndex={0}
            />
            <HeaderImages
              img={"assets/img/phone.jpg"}
              w={"10vw"}
              pos="absolute"
              className={"header-3"}
              transform={"translateY(-50%)"}
              left={"0%"}
              h={"10vw"}
              zIndex={1}
            />
            <HeaderImages
              className={"header-4"}
              img={"assets/img/barimt.jpg"}
              w={"7vw"}
              pos="absolute"
              transform={"translateX(50%) translateY(30%)"}
              right={"25%"}
              h={"7vw"}
              zIndex={1}
            />
            <Box pos={"absolute"} right={0} className={"header-5"} top={"50%"}>
              <IconView
                child={<FaChartSimple size={100} color="purple" />}
                bg="#fee3d440"
                p={6}
              />
            </Box>
          </Box>
        </HStack>
        <Gap />
        <Title text={["Бизнэс", "бүтээгдэхүүнүүд"]} />
        <Gap />
        <Box className="container" p={0}>
          <Title text={["Хамрагч", "байгууллагууд"]} />
          <Gap />

          <HStack w={"full"} justifyContent={"space-between"} mb={4}>
            {partners.slice(0, 3).map((p, i) => {
              const animation = pAnimation.slice(0, 3);
              return (
                <Animation
                  key={i}
                  classNameInView={`${animation[i]} ${
                    p.size == "lg" ? "w-1/2 " : "w-1/4 "
                  }
                  h-[16rem] overflow-hidden rounded-lg
                  `}
                  classNameNotInView={`${
                    p.size == "lg" ? "w-1/2 " : "w-1/4 "
                  } h-[16rem] overflow-hidden rounded-lg`}
                >
                  <Image src={p.img} h="full" w={"full"} objectFit={"cover"} />Ө
                </Animation>
              );
            })}
          </HStack>
          <HStack w={"full"} gap={4} mb={4}>
            {partners.slice(3, 6).map((p, i) => {
              const animation = pAnimation.slice(3, 6);
              return (
                <Animation
                  key={i}
                  classNameInView={`${animation[i]} ${
                    p.size == "lg" ? "w-1/2 " : "w-1/4 "
                  }
                  h-[16rem] overflow-hidden rounded-lg
                  `}
                  classNameNotInView={`${
                    p.size == "lg" ? "w-1/2 " : "w-1/4 "
                  } h-[16rem] overflow-hidden rounded-lg`}
                >
                  <Image src={p.img} h="full" w={"full"} objectFit={"cover"} />
                </Animation>
              );
            })}
          </HStack>
          <HStack w={"full"} gap={4} mt={4} justifyContent={'center'}>
            {partners.slice(6, 9).map((p, i) => {
              const animation = pAnimation.slice(6, 9);
              
              return (
                <Animation
                  key={i}
                  classNameInView={`${animation[i]} w-[10rem]`}
                  classNameNotInView={"w-[10rem]"}
                >
                  <Image src={p.img} h="full" w={"full"} objectFit={"cover"} />
                </Animation>
              );
            })}
          </HStack>
          <Gap />
        </Box>
      </Box>
    </Box>
  );
}
