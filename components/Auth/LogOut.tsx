import Userfront from "@userfront/react";
import { FC } from "react";

const LogoutButton = Userfront.build({
  toolId: "noarbd"
});

const LogOutButtonComponent:FC = ()=>(
    <LogoutButton />
)
export default LogOutButtonComponent;