import { useContext } from "react";
import { ThemeContext } from "../App";

import upper from "../data/upper-header-data";


function UpperHeader () {
    const { cards } = useContext(ThemeContext);
    console.log("cards: ", cards)

    function getTotalCost (list) {
        let total_cost = 0;

        list.forEach(item => {
            if (item.basket) { 
                total_cost += item.cart.total_cost;
            } 
          })
        return total_cost;
    }

    function getQuantity (list) {
        let cart_quantity = 0;

        list.forEach(item => {
            if (item.basket) { 
                cart_quantity += item.cart.cart_quantity;
            } 
          })
        return cart_quantity;
    }
    
    return (
        <section className="upper">
            <div className="contacts-logo">
                <div className="contacts">
                    <div className="phone">
                        <img src={upper.phone_img} alt="phone"/>
                        <a className="contacts-data" href={`tel:${upper.phone_numbNow}`}>{upper.phone_number}</a>
                    </div> 
                    <div className="mail">
                        <img src={upper.mail_img} alt="mail"/>
                        <a className="contacts-data" href={`mailto:${upper.mail_adress}`}>{upper.mail_adress}</a>
                    </div>
                </div>
                <div className="logo">
                    <img src={upper.logo} alt="logo"/>
                </div>
            </div>
            <div className="profile">
                    <div className="cart">
                        <span className="total_cost">{getTotalCost(cards)} ₽</span>
                        <a href="/"><img src={upper.cart_img} alt="cart"/></a>
                        <div className={(getQuantity(cards) !== 0) ? "quantityCart" : "quantityCart none"}><span className="quantityCart-data">{getQuantity(cards)}</span></div>
                    </div>
                    <div className="liked">
                        <a href="/"><img src={upper.like_img} alt="like"/></a>
                    </div>
                    <div className="account">
                        <a href="/"><img src={upper.account_img} alt="account"/></a>
                    </div>
                </div>
        </section>
    )
}

export default UpperHeader;