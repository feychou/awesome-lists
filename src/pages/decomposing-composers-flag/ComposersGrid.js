import React from "react";
import Composer from "./Composer";

function ComposersGrid({ items }) {
  return (
    <div className="ComposersGrid">
      {items.map((item) => (
        <Composer key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ComposersGrid;