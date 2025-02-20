import React, { useState, useEffect } from "react";
import Category_1 from "../../images/category-1.jpg";
import Category_2 from "../../images/category-2.jpg";
import Category_3 from "../../images/category-3.jpg";
import Category_4 from "../../images/category-4.jpg";
import Category_5 from "../../images/category-5.jpg";
import Category_6 from "../../images/category-6.jpg";
import Category_7 from "../../images/category-7.jpg";
import Category_8 from "../../images/category-8.jpg";
import Category_9 from "../../images/category-9.jpg";
import Category_10 from "../../images/category-10.jpg";

const images = [
  Category_1,
  Category_2,
  Category_3,
  Category_4,
  Category_5,
  Category_6,
  Category_7,
  Category_8,
  Category_9,
  Category_10,
];

function Loader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 100); // Change image every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <img
        src={images[index]}
        alt="Loading..."
        className="w-40 h-40 object-cover transition-opacity duration-500 opacity-100"
      />
    </div>
  );
}

export default Loader;


// import React, { Component } from 'react'
// import  loading from "../loading.gif"
// export default class Loader extends Component {
//   render() {
//     return (
//       <div className='text-center'>
//         <img src={loading} alt="loading" />
//       </div>
//     )
//   }
// }