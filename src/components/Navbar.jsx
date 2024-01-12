import { Box, HStack, Image, Link, Text } from "@chakra-ui/react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import MainButton from "./Button";
const links = [
  {
    text: "Бүтээгдэхүүн",
    url: "product",
  },
  {
    text: "Партнер",
    url: "partner",
  },
  {
    text: "Үнэ",
    url: "price",
  },
  {
    text: "Тусламж",
    url: "help",
  },
];
const NavLink = ({ text, uri }) => {
  return (
    <Link href={uri}>
      <HStack>
        <Text>{text}</Text>
        <MdOutlineArrowDropDown />
      </HStack>
    </Link>
  );
};
const Navbar = () => {
  return (
    <Box
      className="nav"
      maxW={"1300px"}
      px={{
        md: 10,
      }}
      py={{
        md: 6,
      }}
      m={"auto"}
    >
      <HStack justifyContent={"space-between"}>
        <Image
          h={"full"}
          maxH={16}
          src={"https://masu.mn/wp-content/uploads/2022/10/masu-1.svg"}
        />
        <HStack gap={4}>
          {links.map((link, i) => {
            return <NavLink key={i} text={link.text} uri={link.url} />;
          })}
          <Box w={4} />
          <MainButton>Эхлэх</MainButton>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
