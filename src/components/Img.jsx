import React from "react";
import { useState } from "react";
export default function Img(props) {
  const [catData, setCatData] = useState();
  const fetchData = async function () {
    const request = await fetch("https://cataas.com/cat/cute?json=true");
    const data = await request.json();
    setCatData(data);
  };
  const imageUrl = catData && `https://cataas.com${catData.url}`;
  return (
    <>
      {catData && <img className="Cat" src={imageUrl} alt="A cat" />}
      {!catData && <div className="Cat no-image" />}
      <button onClick={fetchData}>Fetch a cat</button>
    </>
  );
}
