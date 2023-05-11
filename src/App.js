import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import Cards from "./components/cards";
import Summaryy from "./components/summary";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="text-center border border-dark rounded m-2 bg-secondary">
        Movies List
      </h1>

      <div className="container justify-content-center">
        <div className="row justify-content-center">
          {data.map((e) => {
            // console.log(e.show.image);
            const image = e.show.image
              ? e.show.image.medium
              : "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg";
            return (
              <Cards
                key={e.show.id}
                id={e.show.id}
                name={e.show.name}
                image={image}
                language={e.show.language}
                rating={e.show.rating.average || "NULL"}
                summary={e.show.summary}
              />

              // <Summaryy
              //   key={e.show.id}
              //   name={e.show.name}
              //   summary={e.show.summary}
              // />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
