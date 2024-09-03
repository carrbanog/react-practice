import { useState } from "react";
import User from "./user";
import getImageUrl from "./user";
import recipes from "./data";

function Recipe({ menu }) {
  return (
    <>
      {menu.map((e) => (
        <div key={e.id}>
          <h3>{e.name}</h3>
          {e.ingredients.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </div>
      ))}
    </>
  );
}

function App() {
  const salad = recipes.filter((e) => e.name === "Greek Salad");
  const pizza = recipes.filter((e) => e.name === "Hawaiian Pizza");
  const hummus = recipes.filter((e) => e.name === "Hummus");
  return (
    <div>
      <h1>Recipes</h1>
      <Recipe menu={salad} />
      <Recipe menu={pizza} />
      <Recipe menu={hummus} />
    </div>
  );
}

export default App;
