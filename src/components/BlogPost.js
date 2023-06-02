import { useState } from "react";

function BlogPost (props) {
    const [firstCard, setCard] = useState(props.card);

    function changeFavourite () {
        setCard((copyCard) => {
            let card = {...copyCard};
            card.favourite = !card.favourite;
            return card;
        })
    }

    function minus () {
        setCard((copyCard) => {
            let card = {...copyCard};
            card.basket = false;
            if (card.count >= 2) {
                card.count -= 1;
            }
            return card;
        })
    }

    function plus () {
        setCard((copyCard) => {
            let card = {...copyCard};
            card.basket = false;
            if (card.count >= 1) {
                card.count += 1;
            }
            return card;
        })
    }

    function putBasket () {
        setCard((copyCard) => {
            let card = {...copyCard};
            card.basket = true;
            return card;
        })
    }

    return (
        <div className="card">
            <div className="pictureComplete">
                <img src={firstCard.image} alt="goods"/>
                <div className="sticking">
                    <span className="sticking-name">Новинка</span>
                </div>
                <div className="like">
                    <img onClick={changeFavourite} src={firstCard.favourite ? firstCard.likeActive : firstCard.likeDefault} alt="like" />
                </div>
            </div> 
            <div className="card-content">
                <p className="title">{firstCard.title}</p>
                <p className="prise">{firstCard.prise * firstCard.count} ₽</p>
                <div className="counter">
                    <div><button onClick={minus}>-</button></div>
                    <div className="counter-constructor">
                        <p className={firstCard.basket ? "quantity none" : "quantity"}>{firstCard.count}</p>
                        <a onClick={putBasket} className={firstCard.basket ? "basket-button none" : "basket-button"}>Добавить в корзину!</a>
                        <div className={firstCard.basket ? "basket" : "basket none"}>
                            <p className="basket-count">{firstCard.count}шт</p>
                            <p className="basket-title">В корзине</p>
                        </div>
                    </div>
                    <div><button onClick={plus}>+</button></div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;