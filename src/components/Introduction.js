import React from "react";
import About from "./about";
import PopularPost from "./PopularPosts";


const Introduction = () => {
  return (
      <>
        <div className="w3-col l4">
          <About/>
          <PopularPost/>
        </div>
      </>
  )
}

export default Introduction;