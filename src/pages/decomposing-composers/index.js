import React from "react";
import { useState } from "react";
import ComposersGrid from "./ComposersGrid";
import useComposers from "./useComposers";

import "./styles.css";

export default function ComposersList() {
  const [items, setItems] = useComposers();
  const [searchQuery, setSearchQuery] = useState("");

  const getContent = () => {
    if (items === null) {
      return <div>is loading</div>;
    }

    if (items.length) {
      return <ComposersGrid items={items} />;
    }

    return <div>no result</div>;
  };

  return (
    <div className="ComposersList">
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
