import Navbar from "./Navbar";
import List from "./List";
import Pagination from "./Pagination";
import useHN from "./useHN";
import Footer from "./Footer";

import "./styles.css";
import "./resetter.css";

export default function HackerNews() {
  const {
    isLoading,
    inputVal,
    search,
    error,
    infoList,
    setSearchParams,
    searchParams,
    setInputVal,
    maxPage
  } = useHN();

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) search();
  };

  const getContent = () => {
    if (isLoading) {
      return <div className="alertMessage">Loading..</div>;
    }
    if (error) {
      return (
        <div className="errorFlag">
          <p>An Error occured.</p>
          <button>Go back</button>
        </div>
      );
    }

    if (!infoList.length) {
      return <div className="alertMessage">No result matches the query</div>;
    }

    return (
      <div className="list-body">
        {infoList.map((item, index) => (
          <List
            key={index}
            number={index + 1 + ". "}
            title={item.title}
            points={item.points}
            author={item.author}
            comments={item.num_comments}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="HackerNews">
      <Navbar />
      {getContent()}
      <div className="search-actions">
        <p>Search:</p>
        <input
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
          onKeyUp={handleKeyPress}
        />
        <button disabled={inputVal.length < 3} onClick={search}>
          Search
        </button>
      </div>
      <Pagination
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        isLoading={isLoading}
        setInputVal={setInputVal}
        maxPage={maxPage}
      />
      <Footer />
    </div>
  );
}
