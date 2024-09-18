import React from "react";
//4 Importing a Function as Component
import MetaTags from "../seo/MetaTags";
const About = () => {
  return (
    <div>
      <MetaTags title="Om Oss -About Page" description="Läs mer om oss" />
      <h1>Om Oss sidan</h1>
      <p>Det är Om Oss Sidan för denna Aplicationen</p>
    </div>
  );
};

export default About;
