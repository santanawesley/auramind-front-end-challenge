import { Avatar as ChakraAvatar, AvatarProps } from "@chakra-ui/react";

const Avatar: React.FC<AvatarProps> = (props) => {
  return <ChakraAvatar {...props} />;
};

export default Avatar;
