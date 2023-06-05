import upper from "../data/upper-header-data";

function UpperHeader () {
    
    return (
        <section className="upper">
            <div className="contacts-logo">
                <div className="contacts">
                    <div className="phone">
                        <img src={upper.phone_img} />
                        <a className="contacts-data" href={`tel:${upper.phone_numbNow}`}>{upper.phone_number}</a>
                    </div> 
                    <div className="mail">
                        <img src={upper.mail_img} />
                        <a className="contacts-data" href={`mailto:${upper.mail_adress}`}>{upper.mail_adress}</a>
                    </div>
                </div>
                <div className="logo">
                    <img src={upper.logo} />
                </div>
            </div>
            <div className="profile">
                    <div className="cart">
                        <span className="total_cost">{upper.total_cost} ₽</span>
                        <a href="./cart.html"><img src={upper.cart_img}/></a>
                        <div className="quantityCart"><span className="quantityCart-data">{upper.cart_quantity}</span></div>
                    </div>
                    <div className="liked">
                        <a href="/"><img src={upper.like_img}/></a>
                    </div>
                    <div className="account">
                        <a href="/"><img src={upper.account_img}/></a>
                    </div>
                </div>
        </section>
    )
}

export default UpperHeader;