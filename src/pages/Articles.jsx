import AccordionMenu from "../components/AccordionMenu";
import ArticleList from "../lists/ArticleList";
import "./../App.css";

const Articles = () => {
  return (
    <>
      <main className="page-background paragraph-container">
        <h2 className="page-header">
          Useful articles written by Junglebeauty Bengal Cattery
        </h2>
      </main>

      <AccordionMenu items={ArticleList} />
    </>
  );
};

export default Articles;
