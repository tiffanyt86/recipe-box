import React from "react";
import Tab from "./Tab";

const TabList = (props) => {
  const tabComponents = props.allRecipes.map((recipe) => {
    return <Tab oneRecipe={recipe} />;
  });
  return (
    <div className="container">
      {/* {recipes.map((r) => (
        <Tab recipe={r} />
      ))} */}
      {tabComponents}
    </div>
  );
};

export default TabList;
