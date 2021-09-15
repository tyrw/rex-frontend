import { Button } from "@chakra-ui/button"
import Userfront from "@userfront/react";

const AddToCartButton = ()=>{
    const accessToken = Userfront.accessToken();
    const addtoCart = ()=>{
        const headers= {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Userfront.accessToken()}`,
          }
        const getCarts = async()=>{

            try{
            const resp = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/cart`, {headers:headers})

            if (resp.ok){
                console.log(resp.headers);
                
                console.log(await resp.json());
                
                return {sss:'sda'}
            }
            throw new Error('somerror')
        }catch(err){
            console.error(err);
            return {message: 'error'}
            
        }
        
    }

    getCarts()
}
    return (
        <Button
        onClick={addtoCart}>
            add to cart
        </Button>
    )
}

export default AddToCartButton;