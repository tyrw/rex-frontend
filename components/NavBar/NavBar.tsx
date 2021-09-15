import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { FC } from "react";
import Userfront from "@userfront/react";
import LogOutButtonComponent from '../Auth/LogOut'

const NavBar: FC = () => {
    const logOut = Userfront.lo
  return (
    <Flex bg='ruby.300' width="100vw" direction="row" justify="space-between" align="center" px={[4,4,20]} py={[2,2,5]}>
        
      <p>logo</p>
      <p>menu</p>
      <LogOutButtonComponent />
    </Flex>
  );
};

export default NavBar;
