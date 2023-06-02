import BlogPost from "./BlogPost";
import novelties from "../data/novelties-data";

function Main () {
    const noveltiesElement = novelties.map((card, idx) => <BlogPost card={card} key={idx} />);

  return (
    <main>
        <div className="container">
            <section className="novelties_cards">
                {noveltiesElement}
            </section>
        </div>
    </main>
  );

}

export default Main;