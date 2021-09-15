import Userfront from "@userfront/react";
import { FC } from "react";


const SignupForm = Userfront.build({
  toolId: "manrok"
});


const SignUpFormComponent:FC<any> = ()=>(
    <SignupForm />
)

export default SignUpFormComponent;