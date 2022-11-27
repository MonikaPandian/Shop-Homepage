import { useState } from "react";
import Button from '@mui/material/Button';

const AddCart = ({ cartCount, setCartCount }) => {
    const [add, setAdd] = useState(true);

    return (
        <>
        <div>
            <Button type="button" className={add ? "btn btn-primary btn-lg active" : "btn btn-danger btn-lg active"} onClick={() => {setCartCount(add ? cartCount +1 : cartCount -1);setAdd(!add);}}>{add ? "+ Add to" : "-Remove from"} cart</Button>
        </div>
        </>
    )
}

export default AddCart;