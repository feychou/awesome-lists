import React from "react";
import "./styles.css";
import { useState } from "react";
import ComposersGrid from "./ComposersGrid";
import useComposers from "./useComposers";

export default function DecomposingComposersFlag() {
  const [items, setItems, isLoading, error] = useComposers();
  const [searchQuery, setSearchQuery] = useState("");

  const getContent = () => {
    if (error) {
      return <div>something went wrong :(</div>;
    }

    if (isLoading) {
      return <div>is loading</div>;
    }

    if (items.length) {
      return <ComposersGrid items={items} />;
    }

    return <div>no result</div>;
  };


  return (
    <div className="ComposersListFlag">
      <div className="title">
        <h1>Hello Composers</h1>
      </div>
      <div className="SearchActions">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          className="SearchInput"
          name="search"
          placeholder="Search composers..."
        />
        <button
          disabled={searchQuery.length < 4}
          onClick={() => setItems(searchQuery)}
          className="SearchButton"
        >
          Search
        </button>
        <button onClick={() => setItems()} className="SearchButton">
          Give all
        </button>
      </div>
      {getContent()}
    </div>
  );
}