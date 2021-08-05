import React from "react";
import "./styles.css";

function Pagination({ info, load }) {

  return (
    <div className="Pagination">
      <button
        disabled={info.prev ? false : true}
        onClick={() => load(info.prev)}
      >
        prev
      </button>
      <button
        disabled={info.next ? false : true}
        onClick={() => load(info.next)}
      >
        next
      </button>
      <button onClick={() => load()}>reset</button>
    </div>
  );
}

export default Pagination;
