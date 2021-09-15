import { effect } from "@chakra-ui/styled-system";
import Userfront from "@userfront/react";
import { FC } from "react";

const LoginForm = Userfront.build({
  toolId: "knlrod"
});

// class Demo extends React.Component {s
//   render () {
//     return <LoginForm />
//   }
// }

const SignInFormComponent:FC=()=>(
    <LoginForm />
)

export default SignInFormComponent;