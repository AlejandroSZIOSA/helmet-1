import React from "react";
//4 Import Metatag
import MetaTags from "../seo/MetaTags";
const Home = () => {
  return (
    <div>
      <MetaTags
        title="home startsida"
        description="Välkomen till min hemsida"
      />
      <h1>Välkommen hem</h1>
      <p>Det är ett demo</p>
    </div>
  );
};

export default Home;
