import { Button } from "@chakra-ui/react";
import Animation from "./Animation";
const MainButton = ({
  onClick,
  bg = "#000",
  color = "#fff",
  border,
  children,
}) => {
  return (
    <Animation classNameInView={"downToUp"} classNameNotInView={""}>
      <Button
        onClick={onClick}
        borderRadius={10}
        px={10}
        py={2}
        h="auto"
        border={border}
        fontWeight={500}
        bg={bg}
        color={color}
        fontSize={14}
      >
        {children}
      </Button>
    </Animation>
  );
};

export default MainButton;
