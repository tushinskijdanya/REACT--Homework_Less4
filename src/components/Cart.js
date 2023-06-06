import CartPost from "./CartPost";
import { useContext } from "react";
import { ThemeContext } from "../App";




function ShowCart (props) {
    // const { cards } = useContext(ThemeContext);




    return (
        // <main>
        //     <div className="container">
        //         <CartPost />
        //     </div>
        // </main>
        <div className="cartCard-content">
            <img src={props.card.image} />
            <div>
                <p>Колличество: {props.card.cart.total_cost}</p>
                <p>Общая стоимость: {props.card.cart.cart_quantity}</p>
            </div>
        </div>
    )
}

export default ShowCart;