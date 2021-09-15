import { Center, Flex, Text } from "@chakra-ui/react";
import NavBar from '../components/NavBar/NavBar'

type BaseLayoutProps = {
  children: JSX.Element;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    
  return (
    <>
      
      <Flex width='100vw'
      //maxW={{xl:'1200px'}}
      flexDirection="column">
          <NavBar />
      
        <Center
        flexDirection="column"
        minH="80vh"
        width='100%'
        justify="space-between"
        px ={[4,4,20]}
        >
          {children}
        </Center>
        
      </Flex>
    </>
  );
};

export default BaseLayout;


//   <Flex
//           width="100vw"
//           justifyContent="center"
//           align="center"
//           py={6}
//           px={[4,4,20]}
//           bg='telegram.400'
//           direction='column'
//         >
//           <Text>
//             🎉😃 hi welcome to our url shortener service !🌍😋
//           </Text>
//           {/* <Text>
//             some other etxt here
//           </Text> */}
//         </Flex>