import BlogPost from "./BlogPost";
import { useContext } from "react"
import { ThemeContext } from "../App";

function Main () {
    const {cards, setCards} = useContext(ThemeContext);

  return (
    <main>
        <div className="container">
            <section className="novelties_cards">
                {cards.map((card, idx) => <BlogPost card={card} key={idx} idx={idx} setCards={setCards} />)};
            </section>
        </div>
    </main>
  );

}

export default Main;