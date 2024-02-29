import "./search.css";
import { Link } from "react-router-dom";
import ResultItem from "../components/ResultItem";

export default function Search() {
  return (
    <>
      <div className="search-page">
        <div className="result-items">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => {
            return <ResultItem resultNumber={i} />;
          })}
        </div>
        <div className="continue">
          <Link to={`/checkout`}>
            <input type="submit" value="Continuar" />
          </Link>
        </div>
      </div>
    </>
  );
}
