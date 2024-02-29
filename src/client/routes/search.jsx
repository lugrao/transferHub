import "./search.css"
import ResultItem from "../components/ResultItem";

export default function Search() {
  return (
    <>
      <div className="result-items">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => {
          return <ResultItem resultNumber={i} />;
        })}
      </div>
    </>
  );
}
