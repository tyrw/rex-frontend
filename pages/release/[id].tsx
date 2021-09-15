import { Text } from "@chakra-ui/layout"
import { NextPage } from "next"
import { useRouter } from 'next/router'

interface IdParamInterface{
    id: string;
}

const LoggedIn: NextPage = () => {
    const router = useRouter()
    const { id } = router.query as unknown as IdParamInterface

    
    return <Text>{id}</Text>
}

export default LoggedIn;