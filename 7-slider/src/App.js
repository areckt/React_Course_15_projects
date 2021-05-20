import React, { useState, useEffect } from "react";
import data from "./data";
import Review from "./Review";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <Review people={people} />
    </section>
  );
}

export default App;
