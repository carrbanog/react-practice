import { Children, useState } from "react";
import Gallery from "./Gallery";
import getImageUrl from "./util";


function Drink({name}){
  let plant, caffeine, age;
  if(name === "tea"){
    plant = "leaf"
    caffeine = "15–70 mg/cup"
    age = "4,000+ years"
  }else{
    plant = "bean"
    caffeine = "80–185 mg/cup"
    age = "1,000+ years"
  }
  return(
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{plant}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  )
}

function App() {
  return(
    <>
      <Drink name="tea"/>
      <Drink name="coffee" />
    </>
  )
}

export default App;
